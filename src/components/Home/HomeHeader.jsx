import React from "react";
import { Link } from "react-router-dom";
import styles from "./css/HomeHeader.module.css";
<<<<<<< HEAD

const HomeHeader = () => {
    const homeList = [
        { content: "환영인사", href: "welcome" },
        { content: "회사소개", href: "introduce" },
        { content: "입사 전 준비사항", href: "ready" },
        { content: "게시판", href: "board/notice" },
    ];
    return (
        <header className={styles.homeHeader}>
            <div className={styles.homeContainer}>
                <Link to="/" className={styles.blacklogo}>
                    expert
                </Link>
                <div className={styles.title}>Chemiverse Connect With</div>
                {/* <ul className={styles.homeNav}>
=======
import { GiHamburgerMenu } from "react-icons/gi";

const HomeHeader = () => {
  return (
    <header className={styles.homeHeader}>
      <div className={styles.homeContainer}>
        <Link to="/" className={styles.blacklogo}>
          expert
        </Link>
        <div className={styles.title}>Chemiverse Connect With</div>
        {/* <ul className={styles.homeNav}>
>>>>>>> develop
              {homeList.map((element, index) => {
                return (
                  <li className={styles.navlist} key={index}>
                    <Link to={element.href}>{element.content}</Link>
                  </li>
                );
              })}
            </ul> */}
<<<<<<< HEAD
                <button className={styles.onup_btn}>
                    <Link to="/login">Chemiverse On & Up</Link>
                </button>
            </div>
        </header>
    );
=======
        <button className={styles.onup_btn}>
          <Link to="/login">Chemiverse On & Up</Link>
        </button>
      </div>
    </header>
  );
>>>>>>> develop
};

export default HomeHeader;
