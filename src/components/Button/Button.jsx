import { Link } from "react-router-dom";
import clsx from "clsx";
import css from "./Button.module.css";

export const Button = ({
  type = "button",
  to,
  btnText,
  btnSize = "small",
  onClick,
}) => {
  const sizeStyle = css[btnSize];

  if (to) {
    return (
      <Link className={clsx(css.btn, sizeStyle)} to={to}>
        {btnText}
      </Link>
    );
  }

  return (
    <button type={type} className={clsx(css.btn, sizeStyle)} onClick={onClick}>
      {btnText}
    </button>
  );
};
