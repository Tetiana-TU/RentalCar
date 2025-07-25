import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Catalog from "..pages/Catalog";
import CarDetalis from "../pages/CarDetails";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/catalog" element={<Catalog />} />
      <Route path="/catalog/:id" element={<CarDetalis />} />
    </Routes>
  );
}
