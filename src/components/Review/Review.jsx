import style from "./review.module.css";
import reviews from "../../data/reviews.json";

const ReviewsDetailed = () => {
  const first15Reviews = reviews.slice(0, 15);

  return (
    <section className={style.gall}>
      <h2 className={style.gall__title}>
        Recenzje <span>klientów</span>
      </h2>

      <div className={style.gall__cards}>
        {first15Reviews.map((review) => (
          <div key={review.id} className={style.gall__card}>
            <div className={style.gall__stars}>{"★".repeat(review.rating)}</div>
            <p className={style.gall__text}>{review.text}</p>
            <p className={style.gall__author}>{review.name}</p>
          </div>
        ))}
      </div>

      <button className={style.gall__button}>Pokaż więcej</button>
    </section>
  );
};

export default ReviewsDetailed;