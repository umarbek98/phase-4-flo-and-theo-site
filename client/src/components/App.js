
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



function App() {
  return (
    <div className="App">
      <div className={styles.mainPage}>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/product" element={<ProductPage />} />
          </Routes>
          <Footer />
          <LoginModal />
          <RegisterModal />
      </div>
    </div>
  );
}

export default App;
