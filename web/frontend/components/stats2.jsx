import styles from "../css/General.module.css";
export default function Stats2() {
  return (
    <>
      <div className={styles.tablecontainer2}>
        <div className={styles.tablerow2}>
          <div className={styles.tablecell}>Sales automation</div>
          <div className={styles.tablecell}>Credits Left</div>
          <div className={styles.tablecell}>Time Saved</div>
          <div className={styles.tablecell}>Total Sales from Emails</div>
        </div>
        <div className={styles.tablerow2}>
          <div className={styles.tablecell}>3601</div>
          <div className={styles.tablecell}>24</div>
          <div className={styles.tablecell}>150</div>
          <div className={styles.tablecell}>PKR 0.00</div>
        </div>
      </div>
    </>
  );
}
