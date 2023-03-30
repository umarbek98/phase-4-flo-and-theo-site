import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import { LoginProvider } from './contexts/LoginContext';
import { RegisterProvider } from './contexts/RegisterContext';
import { BrowserRouter } from "react-router-dom"
import { CartProvider } from './contexts/CartContext';
import { CheckoutProvider } from './contexts/CheckoutContext';
import { CancelProvider } from './contexts/CancelContext';
import { OrderProvider } from './contexts/OrderContext';
import { CancelConfirmProvider } from './contexts/CancelConfirmContext';
import { ProductsProvider } from './contexts/ProductsContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <LoginProvider>
      <RegisterProvider>
        <CartProvider>
          <CheckoutProvider>
            <CancelProvider>
              <OrderProvider>
                <CancelConfirmProvider>
                  <ProductsProvider>
                    <BrowserRouter>
                      <App />
                    </BrowserRouter>
                  </ProductsProvider>
                </CancelConfirmProvider>
              </OrderProvider>
            </CancelProvider>
          </CheckoutProvider>
        </CartProvider>
      </RegisterProvider>
    </LoginProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
