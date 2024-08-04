import styles from "../css/General.module.css";
export default function Stats2() {
  return (
    <>
      <div class={styles.tablecontainer2}>
        <div class={styles.tablerow2}>
          <div class={styles.tablecell}>Sales From automation</div>
          <div class={styles.tablecell}>Credits Left</div>
          <div class={styles.tablecell}>Time Saved</div>
          <div class={styles.tablecell}>Total Sales from Emails</div>
        </div>
      </div>
    </>
  );
}
