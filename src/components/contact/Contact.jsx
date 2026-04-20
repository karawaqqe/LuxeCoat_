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

      <div className={style.container}>
        <div className={style.hero}>
          <span className={style.kicker}>Direct Contact</span>
          <h2 className={style.title}>Skontaktuj się z nami</h2>
          <p className={style.description}>
            Zapraszamy do kontaktu telefonicznego, mailowego lub odwiedzenia
            naszego studia. Pomożemy dobrać usługę, omówić termin i przygotować
            wstępną wycenę.
          </p>
        </div>

        <div className={style.infoGrid}>
          <div className={style.infoBlock}>
            <h3 className={style.infoTitle}>Adres</h3>
            <p className={style.infoText}>
              ul. Kowalska 12, 50-001 Wrocław, Polska
            </p>
            <a
              href="https://maps.app.goo.gl/3bnXW45MvXDSaevj8?g_st=ic"
              target="_blank"
              rel="noopener noreferrer"
              className={style.mapLink}
            >
              Zobacz na mapie
            </a>
          </div>

          <div className={style.infoBlock}>
            <h3 className={style.infoTitle}>Telefon</h3>
            <p className={style.infoText}>
              <a href="tel:+48609770890" className={style.phoneLink}>
                +48 609 770 890
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

        <div className={style.layout}>
          <div className={style.mapWrapper}>
            <iframe
              title="LuxeCoat Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2449.4749679705436!2d17.048632515760068!3d51.10242367956152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470fcf6e5dbfba17%3A0x21419a36b09a48c4!2sKowalska%2012%2C%2050-001%20Wroc%C5%82aw!5e0!3m2!1spl!2spl!4v1680674156653!5m2!1spl!2spl"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className={style.formSection}>
            <h3 className={style.formTitle}>Wyślij do nas wiadomość</h3>

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

            <div className={style.social__icons}>
              <a
                href="https://www.instagram.com/luxecoat_premium_auto_studio?igsh=MW15M252NG9iYm83aQ%3D%3D&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className={style.social__item}
              >
                <img src={instagram} alt="instagram" loading="lazy" decoding="async" />
              </a>
              <a
                href="https://www.tiktok.com/@matsafei_vlad"
                target="_blank"
                rel="noopener noreferrer"
                className={style.social__item}
              >
                <img src={tiktok} alt="tiktok" loading="lazy" decoding="async" />
              </a>
              <a
                href="https://www.facebook.com/share/1L1hX1ppcp/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className={style.social__item}
              >
                <img src={facebook} alt="facebook" loading="lazy" decoding="async" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
