import React from "react";
import "./App.css";
import Layout from "./layout/Layout";
import Dashboard from "./pages/Dashboard";
import Wallet from "./pages/Wallets";

const App = () => {
  return (
    <Layout>
      <Dashboard />
      <Wallet />
    </Layout>
  );
};

export default App;
