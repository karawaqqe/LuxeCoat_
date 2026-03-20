import style from "./contact.module.css";

const Contact = () => {
  return (
    <section className={style.contact}>
      <h2 className={style.contact__title}>Contact</h2>

      <div className={style.contact__list}>
        <div className={style.contact__item}>
          <div className={style.contact__icon}></div>
          <div className={style.contact__content}>
            <span className={style.contact__label}>Phone</span>
            <span className={style.contact__text}>
              +48 507 455 558
            </span>
          </div>
        </div>

        <div className={style.contact__item}>
          <div className={style.contact__icon}></div>
          <div className={style.contact__content}>
            <span className={style.contact__label}>Address</span>
            <span className={style.contact__text}>
              Wrocławska 73 Jelcz-Laskowice 55-220
            </span>
          </div>
        </div>

        <div className={`${style.contact__item} ${style["contact__item--schedule"]}`}>
          <div className={style.contact__icon}></div>

          <div className={style.contact__content}>
            <span className={style.contact__label}>Hours</span>

            <div className={style.contact__schedule}>
              <div className={style.contact__row}>
                <span>Sunday</span>
                <span>Closed</span>
              </div>
              <div className={style.contact__row}>
                <span>Monday</span>
                <span>8:00 AM - 4:00 PM</span>
              </div>
              <div className={style.contact__row}>
                <span>Tuesday</span>
                <span>8:00 AM - 4:00 PM</span>
              </div>
              <div className={style.contact__row}>
                <span>Wednesday</span>
                <span>8:00 AM - 4:00 PM</span>
              </div>
              <div className={style.contact__row}>
                <span>Thursday</span>
                <span>8:00 AM - 4:00 PM</span>
              </div>
              <div className={style.contact__row}>
                <span>Friday</span>
                <span>8:00 AM - 4:00 PM</span>
              </div>
              <div className={style.contact__row}>
                <span>Saturday</span>
                <span>Closed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;