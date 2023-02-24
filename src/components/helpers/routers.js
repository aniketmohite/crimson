import { Route, Routes } from "react-router-dom";
import Counter from "../pages/counter";
import HomePage from "../pages/homePage";

const RouteUrls = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/counter" element={<Counter />} />
      </Routes>
    </>
  );
};

export default RouteUrls;
