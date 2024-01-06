import React from "react";
import "./pagesNotDefault";
import { Link } from "react-router-dom";
function PagesNotDefault() {
  return (
    <div>
      <p>404</p>
      <Link to="/">HomePage</Link>
    </div>
  );
}

export default PagesNotDefault;
