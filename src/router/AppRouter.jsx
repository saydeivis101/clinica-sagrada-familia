import { Route, Routes } from "react-router-dom";
import { HomePage } from "../clinicasagrada/pages";
import { Navbar } from "../ui";

export const AppRouter = () => {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/*" element={<HomePage />} />
      </Routes>
    </>
  );
};
