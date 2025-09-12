import { BrowserRouter, Route, Routes } from "react-router";
import Navbar from "./component/layout/Navbar";
import About from "./component/layout/About";
import Cart from "./component/layout/Cart";
import Home from "./component/layout/Home";
import Products from "./component/product/Products";
import Contact from "./component/layout/Contact";
import PersonalInfo from "./component/layout/PersonalInfo";
import Profile from "./component/layout/Profile";
import Order from "./component/layout/Order";
import ProductDetails from "./component/product/ProductDetails";
import PageNotFound from "./component/layout/PageNotFound";
import UserLogin from "./component/user/UserLogin";
import UserRegister from "./component/user/UserRegister";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/personalInfo" element={<PersonalInfo />}>
            <Route path="profile" element={<Profile />} />
            <Route path="order" element={<Order />} />
          </Route>
          <Route path="/userLogin" element={<UserLogin />} />
          <Route path="/userRegister" element={<UserRegister />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
