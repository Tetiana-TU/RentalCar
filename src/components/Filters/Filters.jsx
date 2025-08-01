import css from "./Filters.module.css";
import { Formik, Form, Field } from "formik";

export default function Filters({
  filters,
  brands = [],
  prices = [],
  onSubmit,
}) {
  const initialValues = filters || {
    brand: "",
    price: "",
    from: "",
    to: "",
  };

  return (
    <Formik
      initialValues={initialValues}
      enableReinitialize
      onSubmit={(values) => {
        onSubmit(values);
      }}
    >
      <Form className={css.formFilters}>
        <div className={css.containerFilters}>
          <label htmlFor="brand">Car brand</label>
          <Field
            name="brand"
            as="select"
            className={css.inputFilters}
            // placeholder="Choos a brand"
          >
            <option value="">Choose a brand</option>
            {brands.map((brand) => (
              <option key={brand} value={brand}>
                {brand}
              </option>
            ))}
          </Field>
        </div>
        <div className={css.containerFilters}>
          <label htmlFor="price">Price/1hour</label>
          <Field
            name="price"
            as="select"
            className={css.inputFilters}
            // placeholder="Choose a price"
          >
            <option value="">Choose a price</option>
            {prices.map((price) => (
              <option key={price} value={price}>
                ${price}
              </option>
            ))}
          </Field>
        </div>
        <div className={css.containerFilters}>
          <label htmlFor="from">Car mileage/km</label>
          <Field name="from" className={css.mileageRight} placeholder="From" />
        </div>
        <div className={css.containerFilters}>
          <label htmlFor="to" style={{ visibility: "hidden" }}>
            To
          </label>
          <Field name="to" className={css.mileageLeft} placeholder="To" />
        </div>
        <div className={css.buttonWrapper}>
          <button className={css.button} type="submit">
            Search
          </button>
        </div>
      </Form>
    </Formik>
  );
}
