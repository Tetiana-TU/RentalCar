import { useSelector } from "react-redux";
import { selectCars } from "../../redux/cars/selectors";
import { CarCard } from "../CarCard/CarCard";
import css from "./CarsList.module.css";

export const CarsList = () => {
  const cars = useSelector(selectCars);

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
