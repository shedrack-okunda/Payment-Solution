import React from "react";
import {
  Routes,
  Route,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Layout from "./layout/Layout";
import Invoice from "./pages/Invoices";
import Card from "./pages/Cards";
import Wallet from "./pages/Wallets";
import Transaction from "./pages/Transactions";

const router = createBrowserRouter([{ path: "*", element: <Root /> }]);

export default function App() {
  return <RouterProvider router={router} />;
}

function Root() {
  return (
    <Routes>
      <Route>
        <Route element={<Layout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="invoices" element={<Invoice />} />
          <Route path="cards" element={<Card />} />
          <Route path="wallets" element={<Wallet />} />
          <Route path="transactions" element={<Transaction />} />
        </Route>
      </Route>
    </Routes>
  );
}
