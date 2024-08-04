import Dashboard from "./pages/Dashboard";
import styles from "./css/Dashboard.module.css";
export default function App() {
  return (
    <>
      <div className={styles.body}>
        <Dashboard />
      </div>
    </>
  );
}
