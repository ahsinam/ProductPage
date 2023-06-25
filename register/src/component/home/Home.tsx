import React, { Fragment } from "react";
import { FaSignInAlt, FaSignOutAlt, FaUser, FaBox } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { useAppSelector } from "../../redux/store";

const Home = () => {
  const location = useLocation();
  const userData = useAppSelector((state) => state.userData);
  return (
    <div className="column-flexBox home-container">
      <ul className="column-flexBox ">
        <li>
          <Link to="/product">
            <FaSignInAlt /> Add Product
          </Link>
        </li>
        <li>
          <Link to="/allProducts">
            <FaBox /> All Products
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
