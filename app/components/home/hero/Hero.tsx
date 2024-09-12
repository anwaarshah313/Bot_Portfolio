import React from 'react'
import styles from "./hero.module.css"
export default function Hero() {
  return (
    <>
   <div className={styles.hero}> 
  <div className={styles.hero__title}>
    <h1>heading</h1>
    <p>lo</p>
  </div>
  <div className={styles.cube}></div>
  <div className={styles.cube}></div>
  <div className={styles.cube}></div>
  <div className={styles.cube}></div>
  <div className={styles.cube}></div>
  <div className={styles.cube}></div>
</div>
    </>
  )
}
