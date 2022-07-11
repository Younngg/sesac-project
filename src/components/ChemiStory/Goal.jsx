import React from "react";
import styles from"./css/index.module.css"


const Goal = () => {
  return (
    <div className={styles.JournalGoal}>
      <h1>자기개발목표</h1>
      <h3 className={styles.title}>자기개발목표 설명 글</h3>
      <div>콘텐츠 기획 후 삽입 예정</div>
      <button className={styles.btn}>작성하기</button>
    </div>
  );
};

export default Goal;
