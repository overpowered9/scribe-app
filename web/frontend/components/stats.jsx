import styles from "../css/General.module.css";
export default function Stats() {
  return (
    <>
      <div class={styles.tablecontainer}>
        <div class={styles.tablerow}>
          <div class={styles.tablecell}>Word Generated</div>
          <div class={styles.tablecell}>Credits Used</div>
          <div class={styles.tablecell}>Subscribers</div>
          <div class={styles.tablecell}>Sales from Emails</div>
        </div>
        <div class={styles.tablerow}>
          <div class={styles.tablecell}>3601</div>
          <div class={styles.tablecell}>24</div>
          <div class={styles.tablecell}>150</div>
          <div class={styles.tablecell}>PKR 0.00</div>
        </div>
      </div>
    </>
  );
}
