import style from "./hero.module.css";

const Hero = () => {
  return (
    <section className={style.hero}>
      <div className={style.hero__container}>
        <h1 className={style.hero__title}>LuxeCoat</h1>

        <p className={style.hero__text}>
          O nas LuxeCoat to studio detailingu premium we Wrocławiu.
          Specjalizujemy się w korekcie lakieru, powłokach ceramicznych oraz
          aplikacji folii ochronnych PPF, zapewniając najwyższy poziom ochrony
          i estetyki pojazdu.
          Posiadamy ponad 10 lat doświadczenia w pracy z lakierem — od
          precyzyjnej polerki, przez aplikację powłok ceramicznych, aż po
          profesjonalne oklejanie folią PPF.
          Nasza wiedza i praktyka pozwalają osiągać perfekcyjne rezultaty nawet
          przy najbardziej wymagających projektach.
          Pracujemy wyłącznie na sprawdzonych materiałach i nowoczesnych
          technologiach, dbając o każdy detal.
          Każdy samochód traktujemy indywidualnie, ponieważ wiemy, że liczy się
          nie tylko efekt wizualny, ale również trwałość i ochrona na lata.
          Naszym priorytetem jest najwyższa jakość usług i pełne zadowolenie
          klienta.
          Dążymy do perfekcji w każdym detalu, aby Twój samochód wyglądał
          idealnie i wyróżniał się na drodze.
        </p>

        <button className={style.hero__button}>
          Zadzwoń do nas
        </button>
      </div>
    </section>
  );
};

export default Hero;