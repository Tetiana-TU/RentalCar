import { Route, Routes } from "react-router-dom";
import AppBar from "./components/AppBar/AppBar";
import { Layout } from "./components/Layout/Layout";
import { HomePage } from "./pages/HomePage";
import { CatalogPage } from "./pages/CatalogPage";
import { CarDetailsPage } from "./pages/CarDetailsPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import "./App.css";

const App = () => {
  return (
    <>
      <AppBar />
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/catalog/:id" element={<CarDetailsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </>
  );
};

export default App;
