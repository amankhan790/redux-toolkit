import React from "react";
import "./App.css";
import Home from "./pages/Home";
import Collection from "./pages/Collection";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <div className="bg-gray-900 min-h-screen text-white  w-full">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collection" element={<Collection />} />
      </Routes>
      <ToastContainer />
    </div>
  );
};

export default App;
