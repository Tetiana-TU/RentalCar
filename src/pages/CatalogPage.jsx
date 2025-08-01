import { useEffect, useState } from "react";
import Section from "../components/Section/Section";
import Container from "../components/Container/Container";
import { useDispatch, useSelector } from "react-redux";
import { fetchCars } from "../redux/cars/operations";
import Filters from "../components/Filters/Filters";
// import { Loader } from "../components/";
// import { selectError, selectLoading } from "../redux/cars/selectors";
// import { ErrorMessage } from "../../components/ErrorMessage/ErrorMessage";
import { CarsList } from "../components/CarsList/CarsList";

export const CatalogPage = () => {
  const dispatch = useDispatch();
  // const isLoading = useSelector(selectLoading);
  // const isError = useSelector(selectError);
  const [filters, setFilters] = useState({
    brand: "",
    price: "",
    from: "",
    to: "",
  });
  const cars = useSelector((state) => state.cars.items);
  console.log("cars:", cars);

  const filteredCars = cars.filter((car) => {
    // Фільтр по бренду
    if (filters.brand && car.brand !== filters.brand) {
      return false;
    }
    // Фільтр по ціні
    if (filters.price && String(car.rentalPrice) !== filters.price) {
      return false;
    }
    // Фільтр по пробігу "from"
    if (filters.from && car.mileage < Number(filters.from)) {
      return false;
    }
    // Фільтр по пробігу "to"
    if (filters.to && car.mileage > Number(filters.to)) {
      return false;
    }
    return true;
  });
  const brands = [...new Set(cars.map((car) => car.brand))];

  const prices = [...new Set(cars.map((car) => car.rentalPrice))].sort(
    (a, b) => a - b
  );

  console.log("prices:", prices);
  const handleSubmit = (newFilters) => {
    setFilters(newFilters);

    console.log("Фільтри застосовано:", newFilters);
  };
  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  return (
    <Section>
      <Container>
        <Filters
          filters={filters}
          brands={brands}
          prices={prices}
          onSubmit={handleSubmit}
        />
        <CarsList cars={filteredCars} />
      </Container>
    </Section>
  );
};
