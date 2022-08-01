import React from 'react';
import Navbar from '../component/Navbar';
import styles from "../styles/index.module.css";

const Header = () => {
  return (
    <>
      <header className={styles.header}><br/>
<Navbar/>
<div className={styles.brand_box}></div>

<div className={styles.text_box}>
  <h1 className={styles.heading_primary}>
    <span className={styles.heading_primary_main}>
      Welcome to the world of Next ReactJs
    </span>
    <span className='thapatext'>Love with JavaScript</span>

  </h1>
  <a href='#' className={`${styles.btn} ${styles.btn_white} ${styles.btn_animated}`}> KaranTechnical</a>
</div>

</header>
    </>
  );
}

export default Header;
