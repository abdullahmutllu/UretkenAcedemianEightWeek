import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import SiteRoutes from "./routes/SiteRoutes";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="col">
          <SiteRoutes />
        </div>
      </div>
    </>
  );
}

export default App;
