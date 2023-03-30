import '../index.css';
import HomePage from '../pages/HomePage';
import ShopPage from "../pages/ShopPage";
import AboutPage from '../pages/AboutPage';
import styles from "./App.module.css";
import LoginModal from './LoginModal';
import 'bootstrap/dist/css/bootstrap.min.css';
import RegisterModal from './RegisterModal';
import Footer from './Footer';
import Header from './Header';
import { Routes, Route } from "react-router-dom"
import ProductPage from '../pages/ProductPage';
import CartModal from './CartModal';
import CheckoutModal from './CheckoutModal';
import IngredientsPage from '../pages/IngredientsPage';
import OrderPage from '../pages/OrderPage';
import ContactPage from "../pages/ContactPage";
import OrderModal from './OrderModal';
import PressPage from '../pages/PressPage';
import FaqPage from '../pages/FaqPage';
import PrivacyPage from '../pages/PrivacyPage';
import { useState } from 'react';




function App() {
  const [cart, setCart] = useState([])

  function addToCart(product) {
    const exist = cart.find((item) => item.product_id === product.product_id)
      if (exist) {
        setCart(
          cart.map((item) =>
            item.product_id === exist.product_id
              ? { ...exist, qnty: exist.qnty + 1 }
              : item
          )
        );
      } else {
        setCart([...cart, { ...product, qnty: 1 }]);
      }
    }

  return (
    <div className="App">
      <div className={styles.mainPage}>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/shop/:product_id" element={<ProductPage cart={cart} setCart={setCart} addToCart={addToCart}/>} />
          <Route path="/ingredients" element={<IngredientsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/press" element={<PressPage />} />
          <Route path="/orders" element={<OrderPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/faq" element={<FaqPage/>} />
          <Route path="/privacypolicy" element={<PrivacyPage />} />
        </Routes>
        <Footer />
        <LoginModal />
        <RegisterModal />
        <CartModal cart={cart} setCart={setCart} addToCart={addToCart}/>
        <CheckoutModal />
      </div>
    </div>
  );
}

export default App;
