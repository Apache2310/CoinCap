import React from "react";
import { GrFormSearch } from "react-icons/gr";
import { IoMdSettings } from "react-icons/io";
import styles from"./NavBar.module.css";

const NavBar = () => {
    return (
        <header className={styles.navbar}>
            <div className={`${styles.menu} ${styles.flex}`}>
                <span>Coins</span>
                <span>Exchanges</span>
                <span>Swap</span>
            </div>
            <div className={styles.logo}>
                <img src="https://coincap.io/static/logos/black.svg" alt="coincap" />
            </div>
            <div className={styles.flex}>
                <div className={styles.search}>
                    <GrFormSearch size={25} />
                </div>
                <div className={styles.settings}>
                    <IoMdSettings size={20} />
                </div>
            </div>
        </header>
    );
};

export default NavBar;
