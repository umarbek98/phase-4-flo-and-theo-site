
import '../index.css';
import HomePage from '../pages/HomePage';
import styles from "./App.module.css";
import LoginModal from './LoginModal';
import 'bootstrap/dist/css/bootstrap.min.css';
import RegisterModal from './RegisterModal';
import IngredientsPage from './IngredientsPage';



function App() {
  return (
    <div className="App">
      <div>
          {/* <HomePage />
           <LoginModal />
          <RegisterModal /> */}
          <IngredientsPage />
      </div>
    </div>
  );
}

export default App;
