import React from 'react'
import styles from "./hero.module.css"
import video from "@/images/hero-background.mp4"

export default function Hero() {
  return (
    <div className={styles.hero}> 
      {/* Background Video */}
      <video autoPlay loop muted className={styles.heroVideo}>
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Title and content */}
      <div className={styles.titleDiv}>
        <h1 className={styles.title}>Unlock AI-Powered Insights to Drive<span className={styles.textColor}>  Business Decision Today </span> </h1>
        <p className={styles.subTitle}>Transform your data into actionable intelligence with our AI-driven Saas, designed to optimize efficiency automate workflows, and provide predictive insights for informed decision-making.</p>
     
     <div className={styles.button_outDiv}> 
      <button className={styles.demo_btn}>Book a Demo</button>  <button className={styles.demo_btn}>Take Product Tour</button>
     </div>
      </div>

      {/* Animated cubes */}
      <div className={styles.cube}></div>
      <div className={styles.cube}></div>
      <div className={styles.cube}></div>
      <div className={styles.cube}></div>
      <div className={styles.cube}></div>
      <div className={styles.cube}></div>
    </div>
  )
}
