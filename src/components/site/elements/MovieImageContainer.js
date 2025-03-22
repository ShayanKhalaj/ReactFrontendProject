import Image from 'next/image';
import React from 'react';
import styles from './MovieImageContainer.module.scss';

function MovieImageContainer({ movie }) {
  return (
    <div className={styles.container}>
      <Image 
        src={movie.movieCoverImageUrl} 
        alt={movie.movieLatinTitle} 
        width={2000} 
        height={100} 
        className={styles.image} 
        layout="intrinsic" 
      />
    </div>
  );
}

export default MovieImageContainer;
