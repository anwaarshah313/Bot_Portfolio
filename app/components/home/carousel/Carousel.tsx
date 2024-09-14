import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import styles from './carousel.module.css';
import Autoplay from 'embla-carousel-autoplay';

export default function Carousel() {
  // Configure Autoplay with a 1-second delay
  // const autoplayOptions = { delay: 2000 }; 
  const [emblaRef] = useEmblaCarousel({ loop: true, align: 'start' });

  return (
    <div className={styles.mainOut}>
      <div className={styles.embla} ref={emblaRef}>
        <div className={styles.embla__container}>
          <div className={styles.embla__slide}><h4>Slide 1</h4></div>
          <div className={styles.embla__slide}><h4>Slide 2</h4></div>
          <div className={styles.embla__slide}><h4>Slide 3</h4></div>
          <div className={styles.embla__slide}><h4>Slide 4</h4></div>
          <div className={styles.embla__slide}><h4>Slide 5</h4></div>
          <div className={styles.embla__slide}><h4>Slide 6</h4></div>
          <div className={styles.embla__slide}><h4>Slide 7</h4></div>
          <div className={styles.embla__slide}><h4>Slide 8</h4></div>
          <div className={styles.embla__slide}><h4>Slide 9</h4></div>
          <div className={styles.embla__slide}><h4>Slide 10</h4></div>
          
        </div>
      </div>
    </div>
  );
}
