import * as Yup from "yup";
import clsx from "clsx";
import toast from "react-hot-toast";
import { useEffect, useRef, useState } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { CustomDayPicker } from "../CustomDayPicker/CustomDayPicker";
import { Button } from "../Button/Button";
import css from "./Form.module.css";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .trim()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be at most 50 characters")
    .required("Name is required"),

  email: Yup.string()
    .trim()
    .required("Email is required")
    .test("is-valid-email", "Invalid email address", (value) =>
      /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value)
    ),

  bookDate: Yup.date().nullable().required("Booking date is required"),

  comment: Yup.string()
    .trim()
    .max(500, "Comment must be at most 500 characters"),
});

export const BookForm = () => {
  const [selected, setSelected] = useState(null);
  const [showCalendar, setShowCalendar] = useState(false);
  const calendarRef = useRef();

  const initialValues = {
    name: "",
    email: "",
    bookDate: null,
    comment: "",
  };

  const handleSubmit = (values, { resetForm }) => {
    try {
      toast.success("Your car has been successfully booked!");

      resetForm();

      setSelected(null);
    } catch (error) {
      toast.error("Something went wrong. Please try again later.");
    }
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (calendarRef.current && !calendarRef.current.contains(e.target)) {
        setShowCalendar(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ setFieldValue }) => (
        <Form className={css.form}>
          <h2 className={css.title}>Book your car now</h2>
          <p className={css.text}>
            Stay connected! We are always ready to help you.
          </p>

          <div className={css.fieldWrapper}>
            <Field
              className={css.input}
              name="name"
              type="text"
              placeholder="Name*"
            />
            <ErrorMessage
              className={css.errorMessages}
              name="name"
              component="span"
            />
          </div>

          <div className={css.fieldWrapper}>
            <Field
              className={css.input}
              name="email"
              type="text"
              placeholder="Email*"
            />
            <ErrorMessage
              className={css.errorMessages}
              name="email"
              component="span"
            />
          </div>

          <div className={css.fieldWrapper}>
            <CustomDayPicker
              selected={selected}
              setSelected={(date) => {
                setSelected(date);
                setFieldValue("bookDate", date);
              }}
              showCalendar={showCalendar}
              setShowCalendar={setShowCalendar}
              calendarRef={calendarRef}
            />
            <ErrorMessage
              className={css.errorMessages}
              name="bookDate"
              component="span"
            />
          </div>

          <Field
            className={clsx(css.input, css.textarea)}
            name="comment"
            as="textarea"
            placeholder="Comment"
          />

          <div className={css.btnWrap}>
            <Button type="submit" btnText="Send" btnSize="small" />
          </div>
        </Form>
      )}
    </Formik>
  );
};
