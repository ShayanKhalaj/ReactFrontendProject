import React, { useRef } from "react";
import styles from "./SiteBox.module.scss"; // استایل‌های سفارشی
import Image from "next/image";
import Link from "next/link";

const SiteBox = ({box}) => {
  const carouselRef = useRef(null); // برای دسترسی به المان کاروسل

  const scrollCarousel = (direction) => {
    const scrollAmount = direction === "right" ? 320 : -320;
    carouselRef.current.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className={styles.carouselContainer}>
      <button
        className={`${styles.carouselButton} ${styles.left}`}
        onClick={() => scrollCarousel("left")}
      >
        &#8592;
      </button>
      <div className={styles.carousel} ref={carouselRef}>

        <h4>{box.boxPersianTitle}</h4>
        {box.moviesDetails.map((movie) => (
            <Link href={`/site/movie/${movie.movieId}`} key={movie.movieId} className={styles.carouselItem}>
      
            <Image
              src={movie.movieCoverImageUrl}
              alt={movie.moviePersianTitle}
              width={280}
              height={580}
              className={styles.movieImage}
            />
            <p>{movie.moviePerianTitle}</p>
     
            </Link>
        ))}
      </div>
      <button
        className={`${styles.carouselButton} ${styles.right}`}
        onClick={() => scrollCarousel("right")}
      >
        &#8594;
      </button>
    </div>
  );
};

export default SiteBox;
