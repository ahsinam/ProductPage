import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  Link,
  useLocation,
} from "react-router-dom";
import LoginPage from "./pages/login";
import RegisterPage from "./pages/register";
import ProductPage from "./pages/product";
import GetUsers from "./component/user";
import GetProducts from "./component/productList";
import ProtectedRoute from "./component/protectedRoute";
import HomePage from "./pages/home";

import "./assets/css";
import Navigation from "./component/navigation";

const Router = () => {
  const location = useLocation();

  return (
    <div>
      {location.pathname === "/login" && (
        <nav>
          <Link to="/register">Register</Link>
        </nav>
      )}
      {location.pathname === "/register" && (
        <nav>
          <Link to="/login">Login</Link>
        </nav>
      )}
      <Routes>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/register" element={<RegisterPage />}></Route>

        <Route
          path="/"
          element={
            <>
              <Navigation title="Home" />
              <ProtectedRoute>
                <HomePage />
              </ProtectedRoute>
            </>
          }
        />
        <Route
          path="/users"
          element={
            <>
              <Navigation title="All users" />
              <ProtectedRoute>
                <GetUsers />
              </ProtectedRoute>
            </>
          }
        />
        <Route
          path="/allProducts"
          element={
            <>
              <Navigation title="ALL Products" />
              <ProtectedRoute>
                <GetProducts />
              </ProtectedRoute>
            </>
          }
        />
        <Route
          path="/product"
          element={
            <>
              <Navigation title="Add Product" />
              <ProtectedRoute>{<ProductPage />}</ProtectedRoute>
            </>
          }
        />
      </Routes>
    </div>
  );
};

export default Router;
