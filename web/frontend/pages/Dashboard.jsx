import React from "react";
import styles from "../css/Dashboard.module.css";
import Stats from "../components/stats";
import Stats2 from "../components/stats2";
export default function Dashboard() {
  return (
    <>
      <div className={styles.main}>
        <h1 className={styles.Dashboard}>Dashboard</h1>
        <div className={styles.calenderparent}>
          <div className={styles.calender}>Date</div>
          <button className={styles.calenderbutton}>Weekly</button>
          <button className={styles.calenderbutton}>Add Credit</button>
        </div>
        <div className={styles.statparent}>
          <Stats />
        </div>
        <div className={styles.statparent}>
          <Stats2></Stats2>
        </div>
        <div className={styles.chatparent}>
          <h1>Automation performance over time</h1>
        </div>
        <Stats2></Stats2>
      </div>
    </>
  );
}
