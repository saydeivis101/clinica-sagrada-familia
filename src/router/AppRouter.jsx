import { Route, Routes } from "react-router-dom";
import { HomePage } from "../clinicasagrada/pages";
import { NavbarComponent } from "../ui";

export const AppRouter = () => {
  return (
    <>
      <NavbarComponent/>
      <Routes>
        <Route path="/*" element={<HomePage />} />
      </Routes>
    </>
  );
};
