import { useCallback, useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import style from "./modal.module.css";
import { createPortal } from "react-dom";

const MIN_FILL_TIME = 4000;
const COOLDOWN_TIME = 90 * 1000; 
const MAX_ATTEMPTS_PER_SESSION = 3;

const LAST_SUBMIT_KEY = "review_last_submit";
const ATTEMPTS_KEY = "review_attempts";

const Modal = ({ onClose }) => {
  const [closing, setClosing] = useState(false);
  const [form, setForm] = useState({
    name: "",
    message: "",
    website: "",
  });
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const openedAtRef = useRef(0);

  const handleClose = useCallback(() => {
    setClosing(true);
    setTimeout(onClose, 420);
  }, [onClose]);

  useEffect(() => {
    openedAtRef.current = Date.now();
    document.body.style.overflow = "hidden";

    const handleEsc = (e) => {
      if (e.key === "Escape") handleClose();
    };

    window.addEventListener("keydown", handleEsc);

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleEsc);
    };
  }, [handleClose]);

  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => {
        handleClose();
      }, 1500);

      return () => clearTimeout(timer);
    }
  }, [handleClose, success]);

  const sanitizeText = (text) => {
    return text
      .replace(/\s+/g, " ")
      .replace(/[<>]/g, "")
      .trim();
  };

  const hasUrl = (text) => {
    const urlPattern =
      /(https?:\/\/|www\.|[a-zA-Z0-9-]+\.(com|pl|ru|net|org|io|gg|ua|de|info|site|xyz))/i;
    return urlPattern.test(text);
  };

  const hasSpamPattern = (text) => {
    const lower = text.toLowerCase();

    if (/(.)\1{6,}/.test(lower)) return true;

    const lettersOnly = text.replace(/[^a-zA-Zа-яА-ЯёЁąćęłńóśźżĄĆĘŁŃÓŚŹŻ]/g, "");
    if (lettersOnly.length >= 8) {
      const upperCount = [...lettersOnly].filter(
        (ch) => ch === ch.toUpperCase()
      ).length;
      if (upperCount / lettersOnly.length > 0.8) return true;
    }

    const spamWords = [
      "crypto",
      "bitcoin",
      "casino",
      "bet",
      "loan",
      "seo",
      "promotion",
      "promocja",
      "telegram",
      "whatsapp",
      "http",
      "www",
    ];

    return spamWords.some((word) => lower.includes(word));
  };

  const validate = () => {
    const newErrors = {};
    const cleanName = sanitizeText(form.name);
    const cleanMessage = sanitizeText(form.message);
    const now = Date.now();

    setSubmitError("");

    if (!cleanName) newErrors.name = "Wpisz imię";

    if (!cleanMessage) newErrors.message = "Wpisz opinię";

    if (rating === 0) newErrors.rating = "Wybierz ocenę";

    if (cleanName && cleanName.length < 2) {
      newErrors.name = "Imię jest za krótkie";
    }

    if (cleanName && cleanName.length > 30) {
      newErrors.name = "Imię jest za długie";
    }

    if (cleanMessage && cleanMessage.length < 10) {
      newErrors.message = "Opinia jest za krótka";
    }

    if (cleanMessage && cleanMessage.length > 700) {
      newErrors.message = "Opinia jest za długa";
    }

    if (hasUrl(cleanName) || hasUrl(cleanMessage)) {
      newErrors.message = "Linki nie są dozwolone";
    }

    if (hasSpamPattern(cleanName) || hasSpamPattern(cleanMessage)) {
      newErrors.message = "Wykryto podejrzaną treść";
    }

    if (form.website.trim() !== "") {
      newErrors.bot = "Bot detected";
    }

    if (now - openedAtRef.current < MIN_FILL_TIME) {
      newErrors.time = "Formularz został wysłany zbyt szybko";
    }

    if (navigator.webdriver) {
      newErrors.bot = "Bot detected";
    }

    const lastSubmit = Number(localStorage.getItem(LAST_SUBMIT_KEY) || 0);
    if (lastSubmit && now - lastSubmit < COOLDOWN_TIME) {
      const secondsLeft = Math.ceil((COOLDOWN_TIME - (now - lastSubmit)) / 1000);
      newErrors.cooldown = `Spróbuj ponownie za ${secondsLeft}s`;
    }

    const attempts = Number(sessionStorage.getItem(ATTEMPTS_KEY) || 0);
    if (attempts >= MAX_ATTEMPTS_PER_SESSION) {
      newErrors.limit = "Przekroczono limit prób. Spróbuj później";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (loading) return;
    if (!validate()) return;

    const cleanName = sanitizeText(form.name);
    const cleanMessage = sanitizeText(form.message);

    setLoading(true); 
    setSubmitError("");

    emailjs
      .send(
        "service_okr5znm",
        "template_4nnjb81",
        {
          name: cleanName,
          message: cleanMessage,
          rating: `${rating}/5 (${"★".repeat(rating)})`,
          submitted_at: new Date().toLocaleString(),
          user_agent: navigator.userAgent,
        },
        "mhn1VnBY0AFhQMUES"
      )
      .then(() => {
        localStorage.setItem(LAST_SUBMIT_KEY, String(Date.now()));

        const attempts = Number(sessionStorage.getItem(ATTEMPTS_KEY) || 0);
        sessionStorage.setItem(ATTEMPTS_KEY, String(attempts + 1));

        setSuccess(true);
        setForm({ name: "", message: "", website: "" });
        setRating(0);
        setErrors({});
      })
      .catch((error) => {
        console.error("Błąd EmailJS:", error);
        setSubmitError("Błąd wysyłki. Spróbuj ponownie później");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return createPortal(
    <div
      className={`${style.overlay} ${closing ? style.overlayClosing : ""}`}
      onClick={handleClose}
    >
      <div
        className={`${style.modal} ${closing ? style.modalClosing : ""}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button className={style.close} onClick={handleClose} type="button">
          +
        </button>

        <span className={style.kicker}>Opinia klienta</span>
        <h2 className={style.title}>Napisz opinię</h2>

        <div className={style.stars}>
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              className={`${style.star} ${
                (hover || rating) >= star ? style.activeStar : ""
              }`}
              onClick={() => setRating(star)}
              onMouseEnter={() => setHover(star)}
              onMouseLeave={() => setHover(0)}
            >
              ★
            </span>
          ))}
        </div>

        {errors.rating && <div className={style.errorText}>{errors.rating}</div>}

        <form className={style.form} onSubmit={handleSubmit} noValidate>
          <input
            type="text"
            name="website"
            tabIndex="-1"
            autoComplete="off"
            value={form.website}
            onChange={(e) => setForm({ ...form, website: e.target.value })}
            style={{
              position: "absolute",
              left: "-9999px",
              opacity: 0,
              pointerEvents: "none",
              height: 0,
            }}
          />

          <input
            type="text"
            placeholder="Twoje imię"
            className={`${style.input} ${errors.name ? style.error : ""}`}
            value={form.name}
            maxLength={30}
            onChange={(e) => {
              setForm({ ...form, name: e.target.value });
              if (errors.name) setErrors((prev) => ({ ...prev, name: null }));
            }}
          />
          {errors.name && <div className={style.errorText}>{errors.name}</div>}

          <textarea
            placeholder="Twoja opinia..."
            className={`${style.textarea} ${errors.message ? style.error : ""}`}
            value={form.message}
            maxLength={700}
            onChange={(e) => {
              setForm({ ...form, message: e.target.value });
              if (errors.message) {
                setErrors((prev) => ({ ...prev, message: null }));
              }
            }}
          />
          {errors.message && (
            <div className={style.errorText}>{errors.message}</div>
          )}

          {(errors.time || errors.cooldown || errors.limit || errors.bot) && (
            <div className={style.errorText}>
              {errors.time || errors.cooldown || errors.limit || "Odrzucono wysyłkę"}
            </div>
          )}

          {submitError && <div className={style.errorText}>{submitError}</div>}
          {success && <div className={style.success}>Opinia została wysłana</div>}

          <button className={style.submit} disabled={loading}>
            {loading ? "Wysyłanie..." : "Wyślij"}
          </button>
        </form>
      </div>
    </div>,
    document.getElementById("modal-root")
  );
};

export default Modal;
