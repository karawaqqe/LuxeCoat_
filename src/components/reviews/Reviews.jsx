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
  };

  const handleTouchMove = (e) => {
    endX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = startX.current - endX.current;

    if (diff > 50) nextSlide();
    if (diff < -50) prevSlide();
  };

  return (
    <section className={style.reviews}>
      <div className={style.reviews__line}></div>

      <div className={style.reviews__head}>
        <div>
          <span className={style.reviews__kicker}>Client Voice</span>
          <h2 className={style.reviews__title}>Recenzje klientow</h2>
        </div>

        <p className={style.reviews__intro}>
          Opinie, ktore buduja zaufanie. Zebrane w bardziej editorial formie,
          zeby sekcja wygladala premium, a nie jak zwykly slider.
        </p>
      </div>

      <div className={style.reviews__shell}>
        <button className={style.reviews__arrowLeft} onClick={prevSlide}>
          <img src={arrowLeft} alt="prev" />
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
                            {"*".repeat(review.rating)}
                          </div>
                          <span className={style.reviews__badge}>Verified</span>
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
          <img src={arrowRight} alt="next" />
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
          Pokaz wiecej
        </Link>
      </div>
    </section>
  );
};

export default Reviews;
