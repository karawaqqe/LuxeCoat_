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
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus("error");
      return;
    }

    setLoading(true);
    setStatus("");

    try {
      await emailjs.send(
        "service_okr5znm", // <- сюда свой service_id
        "template_kgu12j5", // <- сюда свой template_id
        {
          name: form.name,
          email: form.email,
          message: form.message,
        },
        "mhn1VnBY0AFhQMUES" // <- сюда свой public_key
      );

      setStatus("success");
      setForm({
        name: "",
        email: "",
        message: "",
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
          <h2 className={style.title}>Skontaktuj sie z nami</h2>
          <p className={style.description}>
            Zapraszamy do kontaktu telefonicznego, mailowego lub odwiedzenia
            naszego studia. Pomozemy dobrac usluge, omowic termin i przygotowac
            wstepna wycene.
          </p>
        </div>

        <div className={style.infoGrid}>
          <div className={style.infoBlock}>
            <h3 className={style.infoTitle}>Adres</h3>
            <p className={style.infoText}>
              ul. Kowalska 12, 50-001 Wroclaw, Polska
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
            <h3 className={style.formTitle}>Wyslij do nas wiadomosc</h3>

            <form className={style.contactForm} onSubmit={sendEmail}>
              <input
                type="text"
                name="name"
                placeholder="Twoje imie"
                className={style.contactInput}
                value={form.name}
                onChange={handleChange}
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Twoj email"
                className={style.contactInput}
                value={form.email}
                onChange={handleChange}
                required
              />

              <textarea
                name="message"
                placeholder="Twoja wiadomosc"
                className={style.contactTextarea}
                value={form.message}
                onChange={handleChange}
                required
              />

              <button
                type="submit"
                className={style.submitBtn}
                disabled={loading}
              >
                {loading ? "Wysylanie..." : "Wyslij"}
              </button>

              {status === "success" && (
                <p className={style.successMessage}>Wiadomosc zostala wyslana ✅</p>
              )}

              {status === "error" && (
                <p className={style.errorMessage}>
                  Wystapil blad. Sprobuj ponownie ❌
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
                <img src={instagram} alt="instagram" />
              </a>
              <a
                href="https://www.tiktok.com/@matsafei_vlad"
                target="_blank"
                rel="noopener noreferrer"
                className={style.social__item}
              >
                <img src={tiktok} alt="tiktok" />
              </a>
              <a
                href="https://www.facebook.com/share/1L1hX1ppcp/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className={style.social__item}
              >
                <img src={facebook} alt="facebook" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}