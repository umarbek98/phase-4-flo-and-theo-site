
import '../index.css';
import HomePage from '../pages/HomePage';
import styles from "./App.module.css";
import LoginModal from './LoginModal';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginProvider from '../contexts/LoginContext.js';



function App() {
  return (
    <div className="App">
      <div className={styles.mainPage}>
          <HomePage />
          <LoginModal />
      </div>
    </div>
  );
}

export default App;
