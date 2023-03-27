
import '../index.css';
import Header from './Header';
import Hero from "./Hero";
import MainContent from "./MainContent"
import styles from "./App.module.css";

function App() {
  return (
    <div className="App">
      <div className={styles.mainPage}>
        <Header />
        <Hero />
        <MainContent />
      </div>
    </div>
  );
}

export default App;
