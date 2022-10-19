import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./views/Home/Home";
import { Demo } from "./views/Demo/Demo";


const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/alpha" element={<Demo />} />
      </Routes>
    </BrowserRouter>
  );
};

export const App: React.FunctionComponent = () => {
  return <AppRouter />;
};
