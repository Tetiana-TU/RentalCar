import css from "./Filters.module.css";
import { Formik, Form, Field } from "formik";
export default function Filters() {
  const handleFilter = ({ brands = [], onSearch }) => {
    const dispatch = useDispatch();

    const filters = useSelector((state) => state.filters);

    const prices = Array.from({ length: 10 }, (_, i) => (i + 1) * 10);

    const handleChange = (e) => {
      let { name, value } = e.target;
      if (name === "minMileage" || name === "maxMileage") {
        value = value.replace(/[^0-9]/g, "");
      }
      dispatch(setFilter({ name, value }));
    };

    const handleSearch = () => {
      onSearch();
      dispatch(clearFilters());
    };
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
