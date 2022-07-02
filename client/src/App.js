import { useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Route,
  Navigate,
  Routes,
} from "react-router-dom";
import AddProduct from "./pages/AddProduct";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Success from "./pages/Success";

function App() {
  const user = useSelector((state) => state.user.currentUser);
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/products/:category" element={<ProductList />}></Route>
        <Route path="/product/:id" element={<Product />}></Route>
        <Route
          path="/login"
          element={user ? <Navigate to="/" replace /> : <Login />}
        ></Route>
        <Route
          path="/register"
          element={user ? <Navigate to="/" replace /> : <Register />}
        ></Route>
        <Route
          path="/addproducts"
          element={user?.isAdmin ? <AddProduct /> : <Navigate to="/" />}
        ></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/success" element={<Success />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
