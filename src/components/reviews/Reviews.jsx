import { useState, useRef } from "react";
import style from "./reviews.module.css";
import reviews from "../../data/reviews.json";
import { Link } from "react-router-dom";

import arrowLeft from "../../img/arrow/arrow-left.png";
import arrowRight from "../../img/arrow/arrow-right.png";

const Reviews = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [activeCard, setActiveCard] = useState(null);

  const startX = useRef(0);
  const endX = useRef(0);
  const startY = useRef(0);
  const endY = useRef(0);

  const reviewsPerPage = 3;
  const totalPages = Math.ceil(reviews.length / reviewsPerPage);

  const nextSlide = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevSlide = () => {
    setCurrentPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  const handleTouchStart = (e) => {
    startX.current = e.touches[0].clientX;
    endX.current = e.touches[0].clientX;
    startY.current = e.touches[0].clientY;
    endY.current = e.touches[0].clientY;
  };

  const handleTouchMove = (e) => {
    endX.current = e.touches[0].clientX;
    endY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = () => {
    const diffX = startX.current - endX.current;
    const diffY = startY.current - endY.current;

    if (Math.abs(diffX) < 55 || Math.abs(diffX) <= Math.abs(diffY)) {
      return;
    }

    if (diffX > 0) nextSlide();
    if (diffX < 0) prevSlide();
  };

  return (
    <section className={style.reviews}>
      <div className={style.reviews__line}></div>

      <div className={style.reviews__head}>
        <div>
          <span className={style.reviews__kicker}>Głos klientów</span>
          <h2 className={style.reviews__title}>Recenzje klientów</h2>
        </div>

        <p className={style.reviews__intro}>
          Opinie, ktore buduja zaufanie. Zebrane w bardziej editorial formie,
          zeby sekcja wygladala premium, a nie jak zwykly slider.
        </p>
      </div>

      <div className={style.reviews__shell}>
        <button className={style.reviews__arrowLeft} onClick={prevSlide}>
          <img src={arrowLeft} alt="prev" loading="lazy" decoding="async" />
        </button>

        <div
          className={style.reviews__viewport}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className={style.reviews__track}
            style={{ transform: `translateX(-${currentPage * 100}%)` }}
          >
            {Array.from({ length: totalPages }).map((_, pageIndex) => {
              const start = pageIndex * reviewsPerPage;
              const pageItems = reviews.slice(start, start + reviewsPerPage);

              return (
                <div key={pageIndex} className={style.reviews__slide}>
                  {pageItems.map((review, cardIndex) => {
                    const isActive = activeCard === review.id;
                    const accentClass =
                      cardIndex === 0
                        ? style.reviews__cardTall
                        : cardIndex === 1
                          ? style.reviews__cardWide
                          : style.reviews__cardSharp;

                    return (
                      <div
                        key={review.id}
                        onClick={() => setActiveCard(review.id)}
                        className={`${style.reviews__card} ${accentClass} ${
                          isActive ? style.activeCard : ""
                        }`}
                      >
                        <div className={style.reviews__cardTop}>
                          <div className={style.reviews__stars}>
                            {Array.from({ length: review.rating }).map((_, starIndex) => (
                              <svg key={starIndex} aria-hidden="true">
                                <use href="#icon-star-full" />
                              </svg>
                            ))}
                          </div>
                          <span className={style.reviews__badge}>Zweryfikowana</span>
                        </div>
                        <p className={style.reviews__text}>{review.text}</p>
                        <p className={style.reviews__author}>{review.name}</p>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>

        <button className={style.reviews__arrowRight} onClick={nextSlide}>
          <img src={arrowRight} alt="next" loading="lazy" decoding="async" />
        </button>
      </div>

      <div className={style.reviews__bottom}>
        <div className={style.reviews__dots}>
          {Array.from({ length: totalPages }).map((_, index) => (
            <span
              key={index}
              className={`${style.reviews__dot} ${
                index === currentPage ? style.active : ""
              }`}
              onClick={() => setCurrentPage(index)}
            />
          ))}
        </div>

        <Link to="/review" className={style.reviews__button}>
          Pokaż więcej
        </Link>
      </div>
    </section>
  );
};

export default Reviews;
