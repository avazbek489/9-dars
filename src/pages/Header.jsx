import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="p-4 shadow-md flex justify-center gap-10 items-center">
      <Link to="/" className="btn btn-info">
        Home
      </Link>
      <Link to="/about" className="btn btn-info">
        About
      </Link>
      <Link to="/products" className="btn btn-info">
        Products
      </Link>
    </header>
  );
}

export default Header;
