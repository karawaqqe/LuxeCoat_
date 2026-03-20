import { useState, useRef } from "react";
import style from "./reviews.module.css";
import reviews from "../../data/reviews.json";

import arrowLeft from "../../img/arrow/arrow-left.png";
import arrowRight from "../../img/arrow/arrow-right.png";

const Reviews = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [activeCard, setActiveCard] = useState(null);

  const startX = useRef(0);
  const startTime = useRef(0);

  const reviewsPerPage = 3;
  const totalPages = Math.ceil(reviews.length / reviewsPerPage);

  const handleStart = (e) => {
    startX.current = e.touches ? e.touches[0].clientX : e.clientX;
    startTime.current = Date.now();
  };

  const handleEnd = (e) => {
    const endX = e.changedTouches ? e.changedTouches[0].clientX : e.clientX;
    const diff = startX.current - endX;
    const time = Date.now() - startTime.current;
    const velocity = Math.abs(diff) / time;

    if (diff > 50 || velocity > 0.5) nextSlide();
    if (diff < -50 || velocity > 0.5) prevSlide();
  };

  const nextSlide = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevSlide = () => {
    setCurrentPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  return (
    <section className={style.reviews}>
      <h2 className={style.reviews__title}>
        Customer’s <span>reviews</span>
      </h2>

      <div className={style.reviews__slider}>

        <button className={style.reviews__arrowLeft} onClick={prevSlide}>
          <img src={arrowLeft} alt="prev" />
        </button>

        <div
          className={style.reviews__viewport}
          onMouseDown={handleStart}
          onMouseUp={handleEnd}
          onTouchStart={handleStart}
          onTouchEnd={handleEnd}
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
                  {pageItems.map((review) => {
                    const isActive = activeCard === review.id;
                    return (
                      <div
                        key={review.id}
                        onClick={() => setActiveCard(review.id)}
                        className={`${style.reviews__card} ${isActive ? style.activeCard : ""}`}
                      >
                        <div className={style.reviews__stars}>
                          {"★".repeat(review.rating)}
                        </div>
                        <p className={style.reviews__text}>{review.text}</p>
                        <p className={style.reviews__author}>~ {review.name}</p>
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

      <div className={style.reviews__dots}>
        {Array.from({ length: totalPages }).map((_, index) => (
          <span
            key={index}
            className={`${style.reviews__dot} ${index === currentPage ? style.active : ""}`}
            onClick={() => setCurrentPage(index)}
          />
        ))}
      </div>

      <button className={style.reviews__button}>Show more</button>
    </section>
  );
};

export default Reviews;