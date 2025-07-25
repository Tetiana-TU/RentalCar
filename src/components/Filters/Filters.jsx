import css from "./Filters.module.css";
import { Formik, Form, Field } from "formik";
export default function Filters() {
  const handleFilter = (values) => {
    console.log("Пошук по фільтру:", values);
  };
  return (
    <Formik
      initialValues={{
        brand: "",
        price: "",
        from: "",
        to: "",
      }}
      onSubmit={handleFilter}
    >
      <Form className={css.formFilters}>
        <div className={css.containerFilters}>
          <label htmlFor="brand">Car brand</label>
          <Field
            name="brand"
            className={css.inputFilters}
            placeholder="Choos a brand"
          />
        </div>
        <div className={css.containerFilters}>
          <label htmlFor="price">Price/1hour</label>
          <Field
            name="price"
            className={css.inputFilters}
            placeholder="Choose a price"
          />
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
          <button className={css.button} type="Submit" onClick={handleFilter}>
            Search
          </button>
        </div>
      </Form>
    </Formik>
  );
}
