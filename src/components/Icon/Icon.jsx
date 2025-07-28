import icon from "./symbol-defs.svg";

export const Icon = ({ name, className }) => {
  return (
    <svg className={className}>
      <use xlinkHref={`${icon}#icon-${name}`} />
    </svg>
  );
};

export default Icon;
