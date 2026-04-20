import { lazy, Suspense, useState } from "react";
import style from "./review.module.css";
import reviews from "../../data/reviews.json";

const Modal = lazy(() => import("../../components/modal/Modal"));

const ReviewsDetailed = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [initialCount] = useState(() => (
    typeof window !== "undefined" && window.innerWidth < 768 ? 3 : 6
  ));
  const [increment] = useState(initialCount);
  const [visibleCount, setVisibleCount] = useState(initialCount);

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
        <h2 className={style.gall__title}>Opinie klientów</h2>
        <p className={style.gall__intro}>
          Pełna ściana recenzji w bardziej wyrazistej kompozycji. Duże karty,
          lekkie przesunięcia i mocniejszy efekt premium.
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
              <div className={style.gall__stars}>
                {Array.from({ length: review.rating }).map((_, starIndex) => (
                  <svg key={starIndex} aria-hidden="true">
                    <use href="#icon-star-full" />
                  </svg>
                ))}
              </div>
              <span className={style.gall__tag}>LuxeCoat</span>
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

      {isOpen && (
        <Suspense fallback={null}>
          <Modal onClose={() => setIsOpen(false)} />
        </Suspense>
      )}
    </section>
  );
};

export default ReviewsDetailed;
