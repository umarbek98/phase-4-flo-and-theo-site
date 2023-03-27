
import '../index.css';
import Header from './Header';
import styles from "./App.module.css";

function App() {
  return (
    <div className="App">
      <div className={styles.mainPage}>
        <Header />
      </div>
    </div>
  );
}

export default App;
