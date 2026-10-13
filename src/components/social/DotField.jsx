// Adapted from the React Bits DotField source supplied by the user.
import { memo, useEffect, useId, useRef } from "react";
import "./DotField.css";

const TWO_PI = Math.PI * 2;

const DotField = memo(function DotField({
  dotRadius = 1.5,
  dotSpacing = 18,
  maxDots = 8000,
  cursorRadius = 350,
  cursorForce = 0.12,
  bulgeOnly = true,
  bulgeStrength = 50,
  glowRadius = 50,
  sparkle = false,
  waveAmplitude = 0,
  gradientFrom = "#888100",
  gradientTo = "#000000",
  glowColor = "#050500",
}) {
  const canvasRef = useRef(null);
  const glowRef = useRef(null);
  const glowId = useId();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const host = canvas.parentElement;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const coarsePointer = window.matchMedia("(pointer: coarse)");
    const lowPower = (navigator.hardwareConcurrency || 8) <= 4 ||
      (navigator.deviceMemory || 8) <= 4;
    let dots = [];
    let width = 0;
    let height = 0;
    let gradient;
    let frame = 0;
    let lastFrame = 0;
    let lastMove = 0;
    let frameCount = 0;
    let inView = false;
    let engagement = 0;
    let glowOpacity = 0;
    const mouse = { x: -9999, y: -9999, prevX: -9999, prevY: -9999, speed: 0 };
    const staticMode = () => reducedMotion.matches || coarsePointer.matches;

    function stop() {
      cancelAnimationFrame(frame);
      frame = 0;
      lastFrame = 0;
    }

    function start() {
      if (!frame && inView && !document.hidden && !staticMode()) {
        frame = requestAnimationFrame(tick);
      }
    }

    function draw(animate) {
      frameCount++;
      const dx = mouse.prevX - mouse.x;
      const dy = mouse.prevY - mouse.y;
      mouse.speed += (Math.hypot(dx, dy) - mouse.speed) * 0.5;
      mouse.prevX = mouse.x;
      mouse.prevY = mouse.y;
      engagement += ((animate ? Math.min(mouse.speed / 5, 1) : 0) - engagement) * 0.06;
      glowOpacity += (engagement - glowOpacity) * 0.08;
      const glow = glowRef.current;
      glow.setAttribute("cx", mouse.x);
      glow.setAttribute("cy", mouse.y);
      glow.style.opacity = animate ? glowOpacity : 0;
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = gradient;
      ctx.beginPath();
      const radius = dotRadius / 2;
      const time = frameCount * 0.02;
      for (let i = 0; i < dots.length; i++) {
        const dot = dots[i];
        const dx = mouse.x - dot.ax;
        const dy = mouse.y - dot.ay;
        const dist = Math.hypot(dx, dy);
        if (!animate) {
          dot.sx = dot.ax;
          dot.sy = dot.ay;
          dot.vx = dot.vy = 0;
        } else if (dist < cursorRadius && engagement > 0.01) {
          const angle = Math.atan2(dy, dx);
          if (bulgeOnly) {
            const push = (1 - dist / cursorRadius) ** 2 * bulgeStrength * engagement;
            dot.sx += (dot.ax - Math.cos(angle) * push - dot.sx) * 0.15;
            dot.sy += (dot.ay - Math.sin(angle) * push - dot.sy) * 0.15;
          } else {
            const move = (500 / Math.max(dist, 1)) * mouse.speed * cursorForce;
            dot.vx -= Math.cos(angle) * move;
            dot.vy -= Math.sin(angle) * move;
          }
        } else if (bulgeOnly) {
          dot.sx += (dot.ax - dot.sx) * 0.1;
          dot.sy += (dot.ay - dot.sy) * 0.1;
        }
        if (animate && !bulgeOnly) {
          dot.vx *= 0.9;
          dot.vy *= 0.9;
          dot.sx += (dot.ax + dot.vx - dot.sx) * 0.1;
          dot.sy += (dot.ay + dot.vy - dot.sy) * 0.1;
        }
        const x = dot.sx + (animate ? Math.cos(dot.ay * 0.03 + time * 0.7) * waveAmplitude * 0.5 : 0);
        const y = dot.sy + (animate ? Math.sin(dot.ax * 0.03 + time) * waveAmplitude : 0);
        const hash = ((i * 2654435761) ^ (frameCount >> 3)) >>> 0;
        const r = animate && sparkle && hash % 100 < 3 ? radius * 1.8 : radius;
        ctx.moveTo(x + r, y);
        ctx.arc(x, y, r, 0, TWO_PI);
      }
      ctx.fill();
    }

    function tick(now) {
      frame = 0;
      if (!inView || document.hidden || staticMode()) return;
      if (now - lastFrame >= (lowPower ? 1000 / 30 : 1000 / 60) - 1) {
        lastFrame = now;
        draw(true);
      }
      if (sparkle || waveAmplitude > 0 || now - lastMove < 2500) {
        frame = requestAnimationFrame(tick);
      } else {
        draw(false);
      }
    }

    function resize() {
      width = host.clientWidth;
      height = host.clientHeight;
      if (!width || !height) return;
      const dpr = Math.min(window.devicePixelRatio || 1, lowPower || coarsePointer.matches ? 1 : 1.5);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      gradient = ctx.createLinearGradient(0, 0, width, height);
      gradient.addColorStop(0, gradientFrom);
      gradient.addColorStop(1, gradientTo);
      // Keep the supplied spacing, but cap the dot count on very large displays.
      const dotLimit = Math.max(1, Math.min(maxDots, lowPower ? 3500 : maxDots));
      const step = Math.max(dotRadius + dotSpacing, Math.sqrt(width * height / dotLimit));
      dots = [];
      const padX = (width % step) / 2;
      const padY = (height % step) / 2;
      for (let row = 0; row < Math.floor(height / step); row++) {
        for (let col = 0; col < Math.floor(width / step); col++) {
          const ax = padX + col * step + step / 2;
          const ay = padY + row * step + step / 2;
          dots.push({ ax, ay, sx: ax, sy: ay, vx: 0, vy: 0 });
        }
      }
      draw(false);
      start();
    }

    function onPointerMove(event) {
      if (staticMode() || event.pointerType === "touch" || !inView || document.hidden) return;
      const rect = host.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      if (x < 0 || y < 0 || x > width || y > height) return;
      if (mouse.x === -9999) {
        mouse.prevX = x;
        mouse.prevY = y;
      }
      mouse.x = x;
      mouse.y = y;
      lastMove = performance.now();
      start();
    }

    function onVisibilityChange() {
      stop();
      if (!document.hidden) start();
    }

    function onPreferenceChange() {
      stop();
      engagement = glowOpacity = mouse.speed = 0;
      resize();
    }

    const resizeObserver = new ResizeObserver(resize);
    const intersectionObserver = new IntersectionObserver(([entry]) => {
      inView = entry.isIntersecting;
      if (inView) start();
      else stop();
    });
    resize();
    resizeObserver.observe(host);
    intersectionObserver.observe(host);
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    document.addEventListener("visibilitychange", onVisibilityChange);
    reducedMotion.addEventListener("change", onPreferenceChange);
    coarsePointer.addEventListener("change", onPreferenceChange);
    return () => {
      stop();
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
      window.removeEventListener("pointermove", onPointerMove);
      document.removeEventListener("visibilitychange", onVisibilityChange);
      reducedMotion.removeEventListener("change", onPreferenceChange);
      coarsePointer.removeEventListener("change", onPreferenceChange);
    };
  }, [dotRadius, dotSpacing, maxDots, cursorRadius, cursorForce, bulgeOnly, bulgeStrength,
    sparkle, waveAmplitude, gradientFrom, gradientTo]);

  return (
    <div className="dot-field-container" aria-hidden="true">
      <canvas ref={canvasRef} />
      <svg>
        <defs>
          <radialGradient id={glowId}>
            <stop offset="0%" stopColor={glowColor} />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
        </defs>
        <circle ref={glowRef} cx="-9999" cy="-9999" r={glowRadius}
          fill={`url(#${glowId})`} style={{ opacity: 0 }} />
      </svg>
    </div>
  );
});

export default DotField;
