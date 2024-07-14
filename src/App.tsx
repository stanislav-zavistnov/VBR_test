import styles from './App.module.css';
import { MainContent } from './components/MainContent/MainContent';

function App() {

  return (
    <div className={styles.appWrap}>
      <MainContent />
    </div>
  )
}

export default App
