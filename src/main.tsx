import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";
import "./index.css";
import CarForm from "./routes/carForm";
import CarTable from "./routes/carTable";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<CarTable />} />
          <Route path="table" element={<CarTable />} />
          <Route path=":id" element={<CarForm />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
