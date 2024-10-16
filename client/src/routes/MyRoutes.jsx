import React from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "../components/features/NavBar";
import Footer from "../components/features/Footer";
import Hero from "../components/features/Hero";
import Courses from "../components/Courses";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <Courses />
    </div>
  );
};
const MyRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div>
            <NavBar />
            <HomePage />
            <Footer />
          </div>
        }
      ></Route>
    </Routes>
  );
};

export default MyRoutes;
