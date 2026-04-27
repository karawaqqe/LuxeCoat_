import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import style from "./contact.module.css";
import instagram from "../../img/social/instagram.jpg";
import tiktok from "../../img/social/tiktok.jpg";
import facebook from "../../img/social/facebook.jpg";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    company: "",
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const [lastSendTime, setLastSendTime] = useState(0);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (status) {
      setStatus("");
    }
  };

  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    if (loading) return;

    const trimmedName = form.name.trim();
    const trimmedEmail = form.email.trim();
    const trimmedMessage = form.message.trim();
    const now = Date.now();

    if (form.company) {
      return;
    }

    if (now - lastSendTime < 15000) {
      setStatus("too_fast");
      return;
    }

    if (!trimmedName || !trimmedEmail || !trimmedMessage) {
      setStatus("empty");
      return;
    }

    if (trimmedName.length < 2) {
      setStatus("name_error");
      return;
    }

    if (!isValidEmail(trimmedEmail)) {
      setStatus("email_error");
      return;
    }

    if (trimmedMessage.length < 10) {
      setStatus("message_error");
      return;
    }

    setLoading(true);
    setStatus("");

    try {
      await emailjs.send(
        "service_okr5znm",
        "template_kgu12j5",
        {
          name: trimmedName,
          email: trimmedEmail,
          message: trimmedMessage,
        },
        "mhn1VnBY0AFhQMUES"
      );

      setLastSendTime(Date.now());
      setStatus("success");

      setForm({
        name: "",
        email: "",
        message: "",
        company: "",
      });
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className={style.contact}>
      <div className={style.bgLine}></div>
      <div className={style.bgShape}></div>
      <div className={style.bgShapeSoft}></div>

      <div className={style.container}>
        <div className={style.heroShell}>
          <div className={style.heroMain}>
            <span className={style.kicker}>Direct Contact</span>
            <h2 className={style.title}>Skontaktuj się z nami</h2>
            <p className={style.description}>
              Zapraszamy do kontaktu telefonicznego, mailowego lub odwiedzenia
              naszego studia. Pomożemy dobrać usługę, omówić termin i
              przygotować wstępną wycenę pod Twój samochód.
            </p>

            <div className={style.quickActions}>
              <a href="tel:+48507455558" className={style.primaryLink}>
                +48 507 455 558
              </a>
              <a
                href="mailto:kontakt@luxecoat.pl"
                className={style.secondaryLink}
              >
                kontakt@luxecoat.pl
              </a>
            </div>
          </div>

          <div className={style.heroAside}>
            <span className={style.asideLabel}>Szybki kontakt</span>
            <p className={style.asideLead}>
              Napisz, zadzwoń lub odwiedź studio. Odpowiemy konkretnie i
              pomożemy dobrać najlepszy wariant usługi.
            </p>

            <div className={style.asideMeta}>
              <div>
                <strong>Wrocław</strong>
                <span>studio premium auto detailingu i ochrony lakieru</span>
              </div>
              <div>
                <strong>Kontakt i wycena</strong>
                <span>ustalane indywidualnie pod auto i zakres prac</span>
              </div>
            </div>
          </div>
        </div>

        <div className={style.infoGrid}>
          <div className={style.infoBlock}>
            <h3 className={style.infoTitle}>Adres</h3>
            <p className={style.infoText}>
              Kwidzyńska 4, Wrocław, Polska
            </p>
          </div>

          <div className={style.infoBlock}>
            <h3 className={style.infoTitle}>Telefon</h3>
            <p className={style.infoText}>
              <a href="tel:+48507455558" className={style.phoneLink}>
                +48 507 455 558
              </a>
            </p>
          </div>

          <div className={style.infoBlock}>
            <h3 className={style.infoTitle}>Email</h3>
            <p className={style.infoText}>
              <a href="mailto:kontakt@luxecoat.pl" className={style.emailLink}>
                kontakt@luxecoat.pl
              </a>
            </p>
          </div>
        </div>

        <div className={style.stage}>
          <div className={style.mapPanel}>
            <div className={style.mapWrapper}>
              <iframe
                title="LuxeCoat Location"
                src="https://maps.google.com/maps?q=Kwidzy%C5%84ska%204%2C%20Wroc%C5%82aw%2C%20Polska&z=15&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <div className={style.formSection}>
            <div className={style.formHead}>
              <span className={style.sectionTag}>Formularz kontaktowy</span>
              <h3 className={style.formTitle}>Wyślij do nas wiadomość</h3>
              <p className={style.formIntro}>
                Napisz, jaki samochód chcesz oddać do studia i na jakim efekcie
                Ci zależy. Skontaktujemy się z Tobą najszybciej, jak to możliwe.
              </p>
            </div>

            <form className={style.contactForm} onSubmit={sendEmail}>
              <input
                type="text"
                name="company"
                value={form.company}
                onChange={handleChange}
                autoComplete="off"
                tabIndex="-1"
                className={style.honeypot}
              />

              <input
                type="text"
                name="name"
                placeholder="Twoje imię"
                className={style.contactInput}
                value={form.name}
                onChange={handleChange}
                required
                maxLength={100}
              />

              <input
                type="email"
                name="email"
                placeholder="Twój email"
                className={style.contactInput}
                value={form.email}
                onChange={handleChange}
                required
                maxLength={120}
              />

              <textarea
                name="message"
                placeholder="Twoja wiadomość"
                className={style.contactTextarea}
                value={form.message}
                onChange={handleChange}
                required
                maxLength={2000}
              />

              <button
                type="submit"
                className={style.submitBtn}
                disabled={loading}
              >
                {loading ? "Wysyłanie..." : "Wyślij"}
              </button>

              {status === "success" && (
                <p className={style.successMessage}>
                  Wiadomość została wysłana.
                </p>
              )}

              {status === "empty" && (
                <p className={style.errorMessage}>
                  Uzupełnij wszystkie pola.
                </p>
              )}

              {status === "name_error" && (
                <p className={style.errorMessage}>
                  Imię musi mieć przynajmniej 2 znaki.
                </p>
              )}

              {status === "email_error" && (
                <p className={style.errorMessage}>
                  Wpisz poprawny adres email.
                </p>
              )}

              {status === "message_error" && (
                <p className={style.errorMessage}>
                  Wiadomość musi mieć przynajmniej 10 znaków.
                </p>
              )}

              {status === "too_fast" && (
                <p className={style.errorMessage}>
                  Poczekaj chwilę przed kolejną wiadomością.
                </p>
              )}

              {status === "error" && (
                <p className={style.errorMessage}>
                  Wystąpił błąd. Spróbuj ponownie.
                </p>
              )}
            </form>
          </div>
        </div>

        <div className={style.socialSection}>
          <a
            href="https://www.instagram.com/luxecoat_premium_auto_studio?igsh=MW15M252NG9iYm83aQ%3D%3D&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
            className={style.socialCard}
          >
            <img
              src={instagram}
              alt="instagram"
              loading="lazy"
              decoding="async"
            />
            <div>
              <strong>Instagram</strong>
              <span>kulisy realizacji i efekt końcowy</span>
            </div>
          </a>
          <a
            href="https://www.tiktok.com/@matsafei_vlad"
            target="_blank"
            rel="noopener noreferrer"
            className={style.socialCard}
          >
            <img
              src={tiktok}
              alt="tiktok"
              loading="lazy"
              decoding="async"
            />
            <div>
              <strong>TikTok</strong>
              <span>krótkie materiały i metamorfozy</span>
            </div>
          </a>
          <a
            href="https://www.facebook.com/share/1L1hX1ppcp/?mibextid=wwXIfr"
            target="_blank"
            rel="noopener noreferrer"
            className={style.socialCard}
          >
            <img
              src={facebook}
              alt="facebook"
              loading="lazy"
              decoding="async"
            />
            <div>
              <strong>Facebook</strong>
              <span>aktualności i szybki kontakt</span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
