import { useEffect, useMemo } from "react";
import Section from "../components/Section/Section";
import Container from "../components/Container/Container";
import { useDispatch, useSelector } from "react-redux";
import { fetchCars } from "../redux/cars/operations";
import { selectFilters } from "../redux/filters/selectors";
import Filters from "../components/Filters/Filters";
import { CarsList } from "../components/CarsList/CarsList";

export const CatalogPage = () => {
  const dispatch = useDispatch();
  const filters = useSelector(selectFilters);
  const cars = useSelector((state) => state.cars.items);

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  const getNumericPrice = (price) =>
    typeof price === "string"
      ? Number(price.replace(/[^0-9.]/g, ""))
      : Number(price);

  const filteredCars = useMemo(() => {
    return cars.filter((car) => {
      if (filters.brand && car.brand !== filters.brand) return false;

      if (
        filters.price &&
        getNumericPrice(car.rentalPrice) > Number(filters.price)
      ) {
        return false;
      }

      if (filters.from && car.mileage < Number(filters.from)) return false;

      if (filters.to && car.mileage > Number(filters.to)) return false;

      return true;
    });
  }, [cars, filters]);
  useEffect(() => {
    console.log("filters:", filters);
    console.log("filteredCars:", filteredCars);
  }, [filters, filteredCars]);

  const brands = [...new Set(cars.map((car) => car.brand))];

  const prices = [
    ...new Set(
      cars.map((car) => Number(car.rentalPrice.toString().replace("$", "")))
    ),
  ].sort((a, b) => a - b);

  return (
    <Section>
      <Container>
        {cars.length > 0 && (
          <Filters filters={filters} brands={brands} prices={prices} />
        )}
        <CarsList cars={filteredCars} />
      </Container>
    </Section>
  );
};
