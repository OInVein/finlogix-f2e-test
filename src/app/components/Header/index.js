import React from 'react';
import styles from './index.module.scss';
import { logo } from '../../images';

const Header = (props) => {
  return (
    <header className={styles.header}>
      <div className={styles.headerLogo}>
        <img className={styles.headerLogoImg} src={logo} alt="logo" />
      </div>

      <nav className={styles.headerNavGroup}>
        <div className={styles.headerNavGroupDropDown}>
          <div className={styles.headerNavGroupDropDownButton}>
            Why ACY
            <i className={styles.arrowUp} />
          </div>
          <div className={styles.headerNavGroupDropDownContent}>
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div>
        </div>
        <div className={styles.headerNavGroupDropDown}>
          <div className={styles.headerNavGroupDropDownButton}>
            Products
            <i className={styles.arrowUp} />
          </div>
          <div className={styles.headerNavGroupDropDownContent}>
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div>
        </div>
        <div className={styles.headerNavGroupDropDown}>
          <div className={styles.headerNavGroupDropDownButton}>
            Platforms
            <i className={styles.arrowUp} />
          </div>
          <div className={styles.headerNavGroupDropDownContent}>
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div>
        </div>
        <div className={styles.headerNavGroupDropDown}>
          <div className={styles.headerNavGroupDropDownButton}>
            Education
            <i className={styles.arrowUp} />
          </div>
          <div className={styles.headerNavGroupDropDownContent}>
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div>
        </div>
        <div className={styles.headerNavGroupDropDown}>
          <div className={styles.headerNavGroupDropDownButton}>
            Partners
            <i className={styles.arrowUp} />
          </div>
          <div className={styles.headerNavGroupDropDownContent}>
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div>
        </div>
      </nav>

      <div className={styles.headerButtonGroup}>
        <div className={styles.headerButtonGroupLogin}>Login</div>
        <div className={styles.headerButtonGroupRegister}>Logout</div>
      </div>
    </header>
  );
};

Header.propTypes = {};

export default Header;
