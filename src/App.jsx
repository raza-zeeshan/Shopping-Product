import Navbar from "./component/layout/Navbar";
import Home from "./component/layout/Home";
import About from "./component/layout/About";
import Contact from "./component/layout/Contact";
import PersonalInfo from "./component/layout/PersonalInfo";
import Profile from "./component/layout/Profile";
import Order from "./component/layout/Order";
import Product from "./component/product/Products";
import ProductDetails from "./component/product/ProductDetails";
import PageNotFound from "./component/layout/PageNotFound";
import Cart from "./component/layout/Cart";
import { BrowserRouter } from "react-router-dom";

export default function App() {
  return (
    <>
      <Navbar />
      {/*<BrowserRouter>
        <Navbar />
        <Routes>
           <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/personalInfo" element={<PersonalInfo />}>
            <Route path="profile" element={<Profile />} />
            <Route path="order" element={<Order />} />
          </Route>
          <Route path="/userLogin" element={<UserLogin />} />
          <Route path="/userRegister" element={<UserRegister />} />
          <Route path="/products" element={<Product />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="/cart" element={<Cart />} /> 
        </Routes>
      </BrowserRouter>*/}
    </>
  );
}
