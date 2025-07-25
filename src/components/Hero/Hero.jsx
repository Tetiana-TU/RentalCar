import { useNavigate } from "react-router-dom";
import css from "./Hero.module.css";

export default function Hero() {
  const navigate = useNavigate();
  return (
    <div className={css.container}>
      <div className={css.heroBackground}>
        <div className={css.infoBtn}>
          <div className={css.infoHero}>
            <h1 className={css.title}>Find your perfect rental car</h1>
            <p className={css.textHero}>
              Reliable and budget-friendly rentals for any journey
            </p>
          </div>
          <button className={css.btnHero} onClick={() => navigate("/catalog")}>
            View Catalog
          </button>
        </div>
      </div>
    </div>
  );
}
