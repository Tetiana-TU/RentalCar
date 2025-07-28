import clsx from "clsx";
import css from "./CarCard.module.css";
import { Link } from "react-router-dom";

export const CarCard = ({ car }) => {
  const splitAddress = car.address.replace(/,/g, "").split(" ");

  return (
    <div className={css.containerCar}>
      <img className={css.img} src={car.img} />

      <div className={css.descWrapper}>
        <p className={css.desc}>
          {car.brand} <span className={css.model}>{car.model}</span>, {car.year}
        </p>
        <p className={clsx(css.desc, css.price)}>{`$${car.rentalPrice}`}</p>
      </div>

      <div className={css.addressWrapper}>
        <div className={css.addressLine}>
          <span>{splitAddress[3]}</span>
          <span>{splitAddress[4]}</span>
          <span>{car.rentalCompany}</span>
        </div>
        <div className={css.addressLine}>
          <span>{car.type}</span>
          <span>{car.mileage} km</span>
        </div>
      </div>
      <Link to={`/catalog/${car.id}`} className={css.readMore}>
        Read more
      </Link>
    </div>
  );
};
