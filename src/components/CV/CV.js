import React from "react";
import styles from './CV.module.css';


function CV() {

  return (

    <div className={styles.main}>

      <div>
        <h2 style={{ color: '#003bfc', textDecoration: 'solid', textAlign: 'center', fontSize: 30 }}>Education</h2>
        <ul style={{ marginLeft: 90 }}>
          <li><span className={styles.basic}><strong>2015</strong></span><span className={styles.secondary}>- High School Graduate</span></li>
          <li><span className={styles.basic}><strong>10/2015 - present</strong></span><span className={styles.secondary}>- Technological Educational Institute (T.E.I) of Computer Engineering, Thessaloniki</span></li>
        </ul>
      </div>

      <div>
        <h2 style={{ color: '#003bfc', textDecoration: 'solid', textAlign: 'center', fontSize: 30 }}>Languages</h2>
        <ul style={{ marginLeft: 90 }}>
          <li><span className={styles.basic}><strong>Native</strong></span><span className={styles.secondary}>- Greek</span></li>
          <li><span className={styles.basic}><strong>Proficiency</strong></span><span className={styles.secondary}>- English</span></li>
          <li><span className={styles.basic}><strong>Celi 3</strong></span><span className={styles.secondary}>- Italian</span></li>
          <li><span className={styles.basic}><strong>Elementary Level</strong></span><span className={styles.secondary}>- Japanese</span></li>
        </ul>
      </div>

      <div>
        <h2 style={{ color: '#003bfc', textDecoration: 'solid', textAlign: 'center', fontSize: 30 }}>Work Experience</h2>
        <ul style={{ marginLeft: 90 }}>
          <li><span className={styles.basic}><strong>2015, 2016, 2017</strong></span><span className={styles.secondary}>- Thessaloniki International Fair (volunteer)</span></li>
          <li><span className={styles.basic}><strong>2019, 2020, 2023</strong></span><span className={styles.secondary}>- GAMEATHLON (volunteer)</span></li>
          <li><span className={styles.basic}><strong>2018</strong></span><span className={styles.secondary}>- SAHARA RESORT</span></li>
          <li><span className={styles.basic}><strong>2018-2019</strong></span><span className={styles.secondary}>- OBERON CAFÉ-BAR</span></li>
          <li><span className={styles.basic}><strong>2021-2022</strong></span><span className={styles.secondary}>- OTAKUSTORE.GR</span></li>
        </ul>
      </div>

    </div>


  );
}
export default CV;