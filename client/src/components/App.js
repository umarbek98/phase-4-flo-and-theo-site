
import '../index.css';
import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import styles from "./App.module.css";
import LoginModal from './LoginModal';
import 'bootstrap/dist/css/bootstrap.min.css';
import RegisterModal from './RegisterModal';



function App() {
  return (
    <div className="App">
      <div className={styles.mainPage}>

          <LoginModal />
          <RegisterModal />
          <AboutPage />
      </div>
    </div>
  );
}

export default App;
