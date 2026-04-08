import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import style from "./gall.module.css";

// 👉 импорты (оставь свои)
import blue from "../../img/gall/blue.jpg";
import j from "../../img/gall/j.jpg";
import jj from "../../img/gall/jj.jpg";
import k from "../../img/gall/k.jpg";
import kk from "../../img/gall/kk.jpg";
import kkk from "../../img/gall/kkk.jpg";
import kkkk from "../../img/gall/kkkk.jpg";
import kkkkk from "../../img/gall/kkkkk.jpg";
import kkkkkk from "../../img/gall/kkkkkk.jpg";
import kkkkkkk from "../../img/gall/kkkkkkk.jpg";
import kkkkkkkk from "../../img/gall/kkkkkkkk.jpg";

import kol from "../../img/gall/kol.jpg";
import o from "../../img/gall/o.jpg";
import oo from "../../img/gall/oo.jpg";
import ooo from "../../img/gall/ooo.jpg";
import oooo from "../../img/gall/oooo.jpg";
import ooooo from "../../img/gall/ooooo.jpg";
import oooooo from "../../img/gall/oooooo.jpg";

import r from "../../img/gall/r.jpg";
import rr from "../../img/gall/rr.jpg";

import s from "../../img/gall/s.jpg";
import ss from "../../img/gall/ss.jpg";
import sss from "../../img/gall/sss.jpg";
import ssss from "../../img/gall/ssss.jpg";

const images = [
  blue,
  j,
  jj,
  k,
  kk,
  kkk,
  kkkk,
  kkkkk,
  kkkkkk,
  kkkkkkk,
  kkkkkkkk,
  kol,
  o,
  oo,
  ooo,
  oooo,
  ooooo,
  oooooo,
  r,
  rr,
  s,
  ss,
  sss,
  ssss,
];

export default function Gallery() {
  const [index, setIndex] = useState(null);
  const [loaded, setLoaded] = useState({});
  const [visible, setVisible] = useState(8);
  const [initial, setInitial] = useState(8);

  useEffect(() => {
    if (window.innerWidth < 768) {
      setVisible(6);
      setInitial(6);
    }
  }, []);

  useEffect(() => {
    const handleKey = (e) => {
      if (index === null) return;

      if (e.key === "ArrowRight") setIndex((i) => (i + 1) % images.length);

      if (e.key === "ArrowLeft")
        setIndex((i) => (i - 1 + images.length) % images.length);

      if (e.key === "Escape") setIndex(null);
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [index]);

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const handleToggle = () => {
    if (visible >= images.length) {
      setVisible(initial);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      setVisible((v) => v + 6);
    }
  };

  return (
    <section className={style.gallery}>
      <h2 className={style.title}>Galeria</h2>

      <motion.div
        className={style.grid}
        variants={container}
        initial="hidden"
        animate="show"
      >
        {images.slice(0, visible).map((img, i) => (
          <motion.div
            key={i}
            variants={item}
            className={style.card}
            onClick={() => setIndex(i)}
            whileHover={{ scale: 1.04 }}
          >
            <img
              src={img}
              alt=""
              loading="lazy"
              onLoad={() => setLoaded((prev) => ({ ...prev, [i]: true }))}
              className={`${style.image} ${loaded[i] ? style.loaded : ""}`}
            />
          </motion.div>
        ))}
      </motion.div>

      <button className={style.moreBtn} onClick={handleToggle}>
        {visible >= images.length ? "Ukryj" : "Pokaż więcej"}
      </button>

      <AnimatePresence>
        {index !== null && (
          <motion.div
            className={style.modal}
            onClick={() => setIndex(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.img
              key={index}
              src={images[index]}
              alt=""
              className={style.modalImg}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={(e, info) => {
                if (info.offset.x < -100)
                  setIndex((i) => (i + 1) % images.length);
                if (info.offset.x > 100)
                  setIndex((i) => (i - 1 + images.length) % images.length);
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
