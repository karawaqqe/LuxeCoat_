import { useState, useEffect } from "react";
import style from "./review.module.css";
import reviews from "../../data/reviews.json";
import Modal from "../../components/modal/Modal";

const ReviewsDetailed = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [visibleCount, setVisibleCount] = useState(0);
  const [increment, setIncrement] = useState(6);
  const [initialCount, setInitialCount] = useState(6);

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
      setVisibleCount(initialCount);
    } else {
      setVisibleCount((prev) => Math.min(prev + increment, reviews.length));
    }
  };

  const allVisible = visibleCount >= reviews.length;

  return (
    <section className={style.gall}>
      <div className={style.gall__line}></div>

      <div className={style.gall__hero}>
        <span className={style.gall__kicker}>All Reviews</span>
        <h2 className={style.gall__title}>Opinie klientow</h2>
        <p className={style.gall__intro}>
          Pelna sciana recenzji w bardziej wyrazistej, gallery-like kompozycji.
          Duze karty, lekkie przesuniecia i mocniejszy premium feeling.
        </p>
      </div>

      <div className={style.gall__cards}>
        {reviews.slice(0, visibleCount).map((review, index) => (
          <div
            key={review.id}
            className={`${style.gall__card} ${
              index % 3 === 0
                ? style.variantA
                : index % 3 === 1
                  ? style.variantB
                  : style.variantC
            }`}
          >
            <div className={style.gall__cardTop}>
              <div className={style.gall__stars}>{"*".repeat(review.rating)}</div>
              <span className={style.gall__tag}>LuxeCoat</span>
            </div>
            <p className={style.gall__text}>{review.text}</p>
            <p className={style.gall__author}>{review.name}</p>
          </div>
        ))}
      </div>

      <div className={style.gall__actions}>
        <button className={style.gall__button} onClick={handleShowMore}>
          {allVisible ? "Ukryj" : "Pokaz wiecej"}
        </button>

        <button
          className={style.gall__buttonWrite}
          onClick={() => setIsOpen(true)}
        >
          Napisz opinie
        </button>
      </div>

      {isOpen && <Modal onClose={() => setIsOpen(false)} />}
    </section>
  );
};

export default ReviewsDetailed;
