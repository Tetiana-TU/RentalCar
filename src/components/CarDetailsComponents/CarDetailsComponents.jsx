import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCars } from "../../redux/cars/selectors";
import Section from "../Section/Section";
import css from "./CarDetailsComponents.module.css";
import clsx from "clsx";
import Icon from "../Icon/Icon";
import { BookForm } from "../Form/Form";
const CarDetailsComponents = () => {
  const { id } = useParams();
  const cars = useSelector(selectCars);
  const car = cars.find((car) => String(car.id) === id);

  if (!car) {
    return (
      <Section>
        <p>Car not found.</p>
      </Section>
    );
  }

  return (
    <Section>
      <div className={css.container}>
        <div className={css.imageForm}>
          <img className={css.img} src={car.img} />
          <div className={css.bookingForm}>
            <h3>Book your car now</h3>
            <p>Stay connected! We are always ready to help you.</p>
            <BookForm />
          </div>
        </div>

        <div className={css.carInfo}>
          <h2 className={css.desc}>
            {car.brand} {car.model}, {car.year}{" "}
          </h2>
          <p className="id">ID: {car.id}</p>

          <p className={css.location}>
            <Icon name="Location" className={clsx(css.icon)} />
            {car.address.split(",").slice(-2).join(", ").trim()} &nbsp; Mileage:{" "}
            {car.mileage} km
          </p>
          <p className={css.price}>{`$${car.rentalPrice}`}</p>
          <p className={css.description}>{car.description}</p>

          <div className={css.section}>
            <h4>Rental Conditions:</h4>
            <ul>
              <li>
                {" "}
                <Icon name="Check-circle" className={clsx(css.icon)} />
                Minimum age : 25
              </li>
              <li>
                {" "}
                <Icon name="Check-circle" className={clsx(css.icon)} />
                Security deposite required{" "}
              </li>
              <li>
                {" "}
                <Icon name="Check-circle" className={clsx(css.icon)} />
                Valid driver’s license
              </li>
            </ul>
          </div>
          <div className={css.section}>
            <h4>Car Specifications:</h4>
            <ul>
              <li>
                <Icon name="Calendar" className={clsx(css.icon)} />
                Year: {car.year};
              </li>
              <li>
                {" "}
                <Icon name="Car" className={clsx(css.icon)} />
                Type: {car.type};
              </li>
              <li>
                <Icon name="Fuel" className={clsx(css.icon)} />
                FuelConsumption: {car.fuelConsumption};
              </li>
              <li>
                <Icon name="Gear" className={clsx(css.icon)} />
                EngineSize: {car.engineSize};
              </li>
            </ul>
          </div>
          <div className={css.section}>
            <h4>Accessories and functionalities:</h4>
            <ul>
              {car.accessories.map((item, index) => (
                <li key={index}>
                  <Icon name="Check-circle" className={clsx(css.icon)} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default CarDetailsComponents;
