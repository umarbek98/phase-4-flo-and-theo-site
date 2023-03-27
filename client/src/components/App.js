
import '../index.css';
import Header from './Header';
import Hero from "./Hero";
import styles from "./App.module.css";

function App() {
  return (
    <div className="App">
      <div className={styles.mainPage}>
        <Header />
        <Hero />
      </div>
    </div>
  );
}

export default App;
