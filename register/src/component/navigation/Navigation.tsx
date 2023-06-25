import React, { Fragment } from "react";
import { Link, useLocation } from "react-router-dom";

interface NavigationProps {
  title: string;
}

const Navigation = (props: NavigationProps) => {
  const location = useLocation();
  return (
    <nav>
      <div>
        {location.pathname !== "/" && (
          <Link className="nav-item-list" to="/">
            Home
          </Link>
        )}
      </div>
      <h1 className="title">{props.title}</h1>
      {["/product", "/allProducts"].includes(location.pathname) && (
        <div>
          <div>
            {location.pathname !== "/product" && (
              <Link className="nav-item-list" to="/product">
                Add Product
              </Link>
            )}
          </div>
          <div>
            {location.pathname !== "/allProducts" && (
              <Link className="nav-item-list" to="/allProducts">
                All Products
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
