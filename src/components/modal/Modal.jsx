import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import style from "./modal.module.css";
import { createPortal } from "react-dom";

const Modal = ({ onClose }) => {
  const [closing, setClosing] = useState(false);

  const [form, setForm] = useState({
    name: "",
    message: "",
  });

  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const handleEsc = (e) => {
      if (e.key === "Escape") handleClose();
    };

    window.addEventListener("keydown", handleEsc);

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleEsc);
    };
  }, []);

  const handleClose = () => {
    setClosing(true);
    setTimeout(onClose, 400);
  };

  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => {
        handleClose();
      }, 1500);

      return () => clearTimeout(timer);
    }
  }, [success]);

  const validate = () => {
    let newErrors = {};

    if (!form.name.trim()) newErrors.name = true;
    if (!form.message.trim()) newErrors.message = true;
    if (rating === 0) newErrors.rating = true;

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;

    // временно без EmailJS
    if ("YOUR_SERVICE_ID" === "YOUR_SERVICE_ID") {
      console.log("FAKE SEND", form, rating);
      setSuccess(true);
      return;
    }

    emailjs
      .send(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        {
          name: form.name,
          message: form.message,
          rating,
        },
        "YOUR_PUBLIC_KEY"
      )
      .then(() => {
        setSuccess(true);
        setForm({ name: "", message: "" });
        setRating(0);
      })
      .catch(() => {
        alert("Błąd wysyłki");
      });
  };

  return createPortal(
    <div
      className={`${style.overlay} ${
        closing ? style.overlayClosing : ""
      }`}
      onClick={handleClose}
    >
      <div
        className={`${style.modal} ${
          closing ? style.modalClosing : ""
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <button className={style.close} onClick={handleClose}>
          ✕
        </button>

        <h2 className={style.title}>Napisz opinię</h2>

        <div className={style.stars}>
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              className={`${style.star} ${
                (hover || rating) >= star
                  ? style.activeStar
                  : ""
              }`}
              onClick={() => setRating(star)}
              onMouseEnter={() => setHover(star)}
              onMouseLeave={() => setHover(0)}
            >
              ★
            </span>
          ))}
        </div>

        {errors.rating && (
          <div className={style.errorText}>
            Wybierz ocenę ⭐
          </div>
        )}

        <form className={style.form} onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Twoje imię"
            className={`${style.input} ${
              errors.name ? style.error : ""
            }`}
            value={form.name}
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
          />

          <textarea
            placeholder="Twoja opinia..."
            className={`${style.textarea} ${
              errors.message ? style.error : ""
            }`}
            value={form.message}
            onChange={(e) =>
              setForm({
                ...form,
                message: e.target.value,
              })
            }
          />

          {success && (
            <div className={style.success}>
              Opinia została wysłana!
            </div>
          )}

          <button className={style.submit}>
            Wyślij
          </button>
        </form>
      </div>
    </div>,

    document.getElementById("modal-root")
  );
};

export default Modal;