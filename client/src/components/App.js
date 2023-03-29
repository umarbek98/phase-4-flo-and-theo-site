
import '../index.css';
import HomePage from '../pages/HomePage';
import ShopPage from "../pages/ShopPage";
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




function App() {
  return (
    <div className="App">
      <div className={styles.mainPage}>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/shop/:product_id" element={<ProductPage />} />
            <Route path="/ingredients" element={<IngredientsPage />} />
            <Route path="/orders" element={<OrderPage />} />
            <Route path="/contact" element={<ContactPage/>} />
          </Routes>
          <Footer />
          <LoginModal />
          <RegisterModal />
          <CartModal />
          <CheckoutModal />
      </div>
    </div>
  );
}

export default App;
