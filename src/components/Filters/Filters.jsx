import css from "./Filters.module.css";
import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import { setFilters } from "../../redux/filters/slice";

export default function Filters({ filters, brands = [], prices = [] }) {
  const dispatch = useDispatch();

  // Значення за замовчуванням, якщо filters ще порожній
  const defaultValues = {
    brand: "",
    price: "",
    from: "",
    to: "",
  };

  // Об’єднання значень з Redux зі значеннями за замовчуванням
  const initialValues = { ...defaultValues, ...filters };

  const handleSubmit = (values) => {
    dispatch(setFilters(values));
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form className={css.formFilters}>
        {/* BRAND */}
        <div className={css.containerFilters}>
          <label htmlFor="brand">Car brand</label>
          <Field name="brand" as="select" className={css.inputFilters}>
            <option value="">Choose a brand</option>
            {brands.map((brand) => (
              <option key={brand} value={brand}>
                {brand}
              </option>
            ))}
          </Field>
        </div>

        {/* PRICE */}
        <div className={css.containerFilters}>
          <label htmlFor="price">Price/1hour</label>
          <Field name="price" as="select" className={css.inputFilters}>
            <option value="">Choose a price</option>
            {prices.map((price) => (
              <option key={price} value={String(price)}>
                ${price}
              </option>
            ))}
          </Field>
        </div>

        {/* FROM */}
        <div className={css.containerFilters}>
          <label htmlFor="from">Car mileage/km</label>
          <Field
            name="from"
            className={css.mileageRight}
            placeholder="From"
            type="number"
            min="0"
          />
        </div>

        {/* TO */}
        <div className={css.containerFilters}>
          <label htmlFor="to" style={{ visibility: "hidden" }}>
            To
          </label>
          <Field
            name="to"
            className={css.mileageLeft}
            placeholder="To"
            type="number"
            min="0"
          />
        </div>

        {/* SUBMIT BUTTON */}
        <div className={css.buttonWrapper}>
          <button className={css.button} type="submit">
            Search
          </button>
        </div>
      </Form>
    </Formik>
  );
}
