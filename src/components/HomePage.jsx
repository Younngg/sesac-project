import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";

import styles from "./style/connect.module.css";

const HomePage = () => {
    const [num, setNum] = useState(0);
    const tabData = [0, 1, 2, 3];
    const fncTab = (e, index) => {
        e.preventDefault();
        setNum(index);
    };
    const isMobile = useMediaQuery({
        query: "(max-width: 720px)",
    });
    const isDesktop = useMediaQuery({
        query: "(min-width: 721px)",
    });

    return (
        <div className={styles.connectMain}>
            <ul className={styles.slidingList}>
                {/* 모바일버전 */}
                {isMobile && (
                    <>
                        <li
                            className={
                                num === 0
                                    ? `${styles.slidingItem} ${styles.welcomeSlide} ${styles.on}`
                                    : `${styles.slidingItem} ${styles.welcomeSlide}`
                            }
                            onClick={(e) => {
                                fncTab(e, 0);
                            }}
                        >
                            <img
                                src={
                                    process.env.PUBLIC_URL +
                                    "/chemiverse_img/bg-welcome-pop.png"
                                }
                                alt=""
                                className={styles.popImg}
                            />
                            <h2 className={styles.connectTitle}>환영인사</h2>
                            <p className={styles.connectDesc}>
                                여러분과 함께할 엑스퍼트컨설팅을 소개합니다. CEO
                                Welcome Message
                            </p>
                            <Link to="welcome">
                                <div className={styles.linkBtn}>바로가기</div>
                            </Link>
                        </li>
                        <li
                            className={
                                num === 1
                                    ? `${styles.slidingItem} ${styles.introduceSlide} ${styles.on}`
                                    : `${styles.introduceSlide} ${styles.slidingItem}`
                            }
                            onClick={(e) => {
                                fncTab(e, 1);
                            }}
                        >
                            <img
                                src={
                                    process.env.PUBLIC_URL +
                                    "/chemiverse_img/bg-contents-pop2.png"
                                }
                                alt=""
                                className={styles.popImg}
                            />
                            <h2 className={styles.connectTitle}>회사소개</h2>
                            <p className={styles.connectDesc}>
                                엑스퍼트컨설팅은 국내조직의 경영혁신 및
                                인재육성의 엑설런스 추구를 위한 여러 영역별
                                사업활동을 전개해 오고 있습니다.
                            </p>
                            <Link to="introduce">
                                <div className={styles.linkBtn}>바로가기</div>
                            </Link>
                        </li>
                        <li
                            className={
                                num === 2
                                    ? `${styles.slidingItem} ${styles.readySlide} ${styles.on}`
                                    : `${styles.slidingItem} ${styles.readySlide}`
                            }
                            onClick={(e) => {
                                fncTab(e, 2);
                            }}
                        >
                            <img
                                src={
                                    process.env.PUBLIC_URL +
                                    "/chemiverse_img/bg-ready-pop.png"
                                }
                                alt=""
                                className={styles.popImg}
                            />
                            <h2 className={styles.connectTitle}>
                                입사 전 준비사항
                            </h2>
                            <p className={styles.connectDesc}>
                                합격을 진심으로 축하드립니다. 체크리스트를
                                활용하여 입사에 필요한 사항을 체크해봅시다.
                            </p>
                            <Link to="ready">
                                <div className={styles.linkBtn}>바로가기</div>
                            </Link>
                        </li>
                        <li
                            className={
                                num === 3
                                    ? `${styles.slidingItem} ${styles.homeNoticeSlide} ${styles.on}`
                                    : `${styles.slidingItem} ${styles.homeNoticeSlide}`
                            }
                            onClick={(e) => {
                                fncTab(e, 3);
                            }}
                        >
                            <img
                                src={
                                    process.env.PUBLIC_URL +
                                    "/chemiverse_img/bg-board-pop.png"
                                }
                                alt=""
                                className={styles.popImg}
                            />
                            <h2 className={styles.connectTitle}>게시판</h2>
                            <p className={styles.connectDesc}>
                                회사에 대한 궁금한 점을 물어보세요. 나의 동료와
                                다양한 이야기를 나누어보세요.
                            </p>
                            <Link to="board/notice">
                                <div className={styles.linkBtn}>바로가기</div>
                            </Link>
                        </li>
                    </>
                )}
                {/* 컴퓨터버전 */}
                {isDesktop && (
                    <>
                        <li
                            className={
                                num === 0
                                    ? `${styles.slidingItem} ${styles.welcomeSlide} ${styles.on}`
                                    : `${styles.slidingItem} ${styles.welcomeSlide}`
                            }
                            onMouseEnter={(e) => {
                                fncTab(e, 0);
                            }}
                        >
                            <img
                                src={
                                    process.env.PUBLIC_URL +
                                    "/chemiverse_img/bg-welcome-pop.png"
                                }
                                alt=""
                                className={styles.popImg}
                            />
                            <h2 className={styles.connectTitle}>환영인사</h2>
                            <p className={styles.connectDesc}>
                                여러분과 함께할 엑스퍼트컨설팅을 소개합니다. CEO
                                Welcome Message
                            </p>
                            <Link to="welcome">
                                <div className={styles.linkBtn}>바로가기</div>
                            </Link>
                        </li>
                        <li
                            className={
                                num === 1
                                    ? `${styles.slidingItem} ${styles.introduceSlide} ${styles.on}`
                                    : `${styles.introduceSlide} ${styles.slidingItem}`
                            }
                            onMouseEnter={(e) => {
                                fncTab(e, 1);
                            }}
                        >
                            <img
                                src={
                                    process.env.PUBLIC_URL +
                                    "/chemiverse_img/bg-contents-pop2.png"
                                }
                                alt=""
                                className={styles.popImg}
                            />
                            <h2 className={styles.connectTitle}>회사소개</h2>
                            <p className={styles.connectDesc}>
                                엑스퍼트컨설팅은 국내조직의 경영혁신 및
                                인재육성의 엑설런스 추구를 위한 여러 영역별
                                사업활동을 전개해 오고 있습니다.
                            </p>
                            <Link to="introduce">
                                <div className={styles.linkBtn}>바로가기</div>
                            </Link>
                        </li>
                        <li
                            className={
                                num === 2
                                    ? `${styles.slidingItem} ${styles.readySlide} ${styles.on}`
                                    : `${styles.slidingItem} ${styles.readySlide}`
                            }
                            onMouseEnter={(e) => {
                                fncTab(e, 2);
                            }}
                        >
                            <img
                                src={
                                    process.env.PUBLIC_URL +
                                    "/chemiverse_img/bg-ready-pop.png"
                                }
                                alt=""
                                className={styles.popImg}
                            />
                            <h2 className={styles.connectTitle}>
                                입사 전 준비사항
                            </h2>
                            <p className={styles.connectDesc}>
                                합격을 진심으로 축하드립니다. 체크리스트를
                                활용하여 입사에 필요한 사항을 체크해봅시다.
                            </p>
                            <Link to="ready">
                                <div className={styles.linkBtn}>바로가기</div>
                            </Link>
                        </li>
                        <li
                            className={
                                num === 3
                                    ? `${styles.slidingItem} ${styles.homeNoticeSlide} ${styles.on}`
                                    : `${styles.slidingItem} ${styles.homeNoticeSlide}`
                            }
                            onMouseEnter={(e) => {
                                fncTab(e, 3);
                            }}
                        >
                            <img
                                src={
                                    process.env.PUBLIC_URL +
                                    "/chemiverse_img/bg-board-pop.png"
                                }
                                alt=""
                                className={styles.popImg}
                            />
                            <h2 className={styles.connectTitle}>게시판</h2>
                            <p className={styles.connectDesc}>
                                회사에 대한 궁금한 점을 물어보세요. 나의 동료와
                                다양한 이야기를 나누어보세요.
                            </p>
                            <Link to="board/notice">
                                <div className={styles.linkBtn}>바로가기</div>
                            </Link>
                        </li>
                    </>
                )}
            </ul>
        </div>
    );
};

export default HomePage;