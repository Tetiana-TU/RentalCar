import { NavLink } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import logo from "../../../public/RentalCar.svg";
// import Container from "../Container/Container";
// import Home from "../Hero/Hero";
import css from "./AppBar.module.css";

export default function AppBar() {
  return (
    <header className={css.header}>
      <NavLink className={css.logo} to="/">
        <img src={logo} alt="logo" />
      </NavLink>

      <Navigation />
    </header>
  );
}
