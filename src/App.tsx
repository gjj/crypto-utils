import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./views/Home/Home";
import { HDWalletPage } from "./views/HDWallet/HDWallet";


const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/hd" element={<HDWalletPage />} />

      </Routes>
    </BrowserRouter>
  );
};

export const App: React.FunctionComponent = () => {
  return <AppRouter />;
};
