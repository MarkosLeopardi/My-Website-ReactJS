import React from "react";
import styles from './Header.module.css';

function Header() {

    return (
        <header className={styles.header}>
          <img className={styles.headerPic} src={require('../images/main.jpg')} alt="Header" />
          <h1 style={{ color: 'white', fontSize: 50 }}>Leopardi Marco Antonio</h1>
        </header>
      );
      
}

export default Header;
