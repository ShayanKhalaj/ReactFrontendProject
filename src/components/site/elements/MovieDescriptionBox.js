import React from "react";
import styles from "./MovieDescriptionBox.module.scss";
import PlayBox from "./PlayBox";
import Image from "next/image";

function MovieDescriptionBox({ movie, genre, director, actors }) {
  return (
    <div className={styles.outerContainer}>
      <div className={styles.leftContainer}>
        <div className={styles.videoBox}>
          <video controls>
            <source src={movie.movieTrailerVideoUrl} />
          </video>
          <PlayBox movie={movie}/>
        </div>
      </div>

      <div className={styles.rightContainer}>
        <div className={styles.infoSection}>
          <h1 className={styles.textBox}>{movie.moviePersianTitle}</h1>
          <h6 className={styles.textBox}>خلاصه : {movie.summary}</h6>
          <h6 className={styles.textBox}>مناسب برای سن : {movie.minAge} +</h6>
          <h6 className={styles.textBox}>ژانر : {genre.genrePersianName} </h6>

          {/* اطلاعات کارگردان */}
          <div className={styles.directorContainer}>
            <Image
              src={director.directorImageUrl}
              height={48}
              width={48}
              alt="director"
              className={styles.roundedImage}
            />
            <h6 className={styles.textBox}>
              کارگردان : {director.firstname} {director.lastname}
            </h6>
          </div>
          <h6 className={styles.textBox}>ملیت : {director.nation}</h6>

          {/* لیست بازیگران */}
          <h4>بازیگران : </h4>
          <div className={styles.actorContainer}>
            {actors.map((item) =>
              item.actorDetails.map((actor) => (
                <div key={actor.actorId} className={styles.actorCard}>
                  <Image
                    src={actor.actorImageUrl}
                    alt={actor.firstname}
                    width={48}
                    height={48}
                    className={styles.roundedImage}
                  />
                  <h6 className={styles.textBox}>{actor.firstname}</h6>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDescriptionBox;
