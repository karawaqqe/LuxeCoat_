import { useState, useEffect } from "react";
import style from "./review.module.css";
import reviews from "../../data/reviews.json";
import Modal from "../../components/modal/Modal";

const ReviewsDetailed = () => {
  const [isOpen, setIsOpen] = useState(false);

  // сколько отзывов показываем
  const [visibleCount, setVisibleCount] = useState(0);
  // сколько добавлять при клике
  const [increment, setIncrement] = useState(6);
  // сколько показываем изначально
  const [initialCount, setInitialCount] = useState(6);

  // при монтировании определяем устройство
  useEffect(() => {
    const width = window.innerWidth;
    if (width < 768) {
      setIncrement(3);
      setInitialCount(3);
      setVisibleCount(3);
    } else {
      setIncrement(6);
      setInitialCount(6);
      setVisibleCount(6);
    }
  }, []);

  const handleShowMore = () => {
    if (visibleCount >= reviews.length) {
      // если уже все видим, скрываем до начального количества
      setVisibleCount(initialCount);
    } else {
      // добавляем новые
      setVisibleCount((prev) => Math.min(prev + increment, reviews.length));
    }
  };

  const allVisible = visibleCount >= reviews.length;

  return (
    <section className={style.gall}>
      <h2 className={style.gall__title}>
        Recenzje <span>klientów</span>
      </h2>

      <div className={style.gall__cards}>
        {reviews.slice(0, visibleCount).map((review) => (
          <div key={review.id} className={style.gall__card}>
            <div className={style.gall__stars}>
              {"★".repeat(review.rating)}
            </div>
            <p className={style.gall__text}>{review.text}</p>
            <p className={style.gall__author}>{review.name}</p>
          </div>
        ))}
      </div>

      <div className={style.gall__actions}>
        <button className={style.gall__button} onClick={handleShowMore}>
          {allVisible ? "Ukryj" : "Pokaż więcej"}
        </button>

        <button
          className={style.gall__buttonWrite}
          onClick={() => setIsOpen(true)}
        >
          Napisz opinię
        </button>
      </div>

      {isOpen && <Modal onClose={() => setIsOpen(false)} />}
    </section>
  );
};

export default ReviewsDetailed;