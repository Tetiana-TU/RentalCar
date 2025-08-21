import { useSelector } from "react-redux";
import { selectCars } from "../../redux/cars/selectors";
import { CarCard } from "../CarCard/CarCard";
import css from "./CarsList.module.css";

export const CarsList = ({ cars }) => {
  if (!cars || cars.length === 0) {
    return <p>No cars found</p>;
  }

  return (
    <ul className={css.list}>
      {cars.map((car) => (
        <li className={css.listItem} key={car.id}>
          <CarCard car={car} />
        </li>
      ))}
    </ul>
  );
};
