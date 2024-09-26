import React from "react";
import "./App.css";
import Layout from "./layout/Layout";
import Dashboard from "./pages/Dashboard";
import Invoice from "./pages/Invoices";
import Card from "./pages/Cards";
import Wallet from "./pages/Wallets";
import Transaction from "./pages/Transactions";

const App = () => {
  return (
    <>
      <Layout>
        <Dashboard />
        <Invoice />
        <Card />
        <Wallet />
        <Transaction />
      </Layout>
    </>
  );
};

export default App;
