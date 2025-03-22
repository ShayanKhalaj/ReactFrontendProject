import MovieDescriptionBox from "@/components/site/elements/MovieDescriptionBox";
import PlayBox from "@/components/site/elements/PlayBox";
import SiteNavbar from "@/components/site/menu/SiteNavbar";
import SiteWrapper from "@/components/ui/theme/SiteWrapper";
import axios from "axios";
import React, { act } from "react";
import { Col, Container, Row } from "react-bootstrap";
import '@/styles/Movie.scss'
import SiteSlider from "@/components/site/elements/SiteCarousel";
import MovieImageContainer from "@/components/site/elements/MovieImageContainer";

function Movies({ movie,genre,director ,actors }) {
  return (
    <>
      <SiteWrapper>
        <SiteNavbar />
        {/* اضافه کردن فاصله مناسب از بالا */}
            <MovieImageContainer movie={movie} />
        <div className="mt-6 moviecontainer">
          <div className="movierow">
            <div className="moviecol">
              <MovieDescriptionBox movie={movie} genre={genre} director={director} actors={actors} />
            </div>
          </div>
        </div>
      </SiteWrapper>
    </>
  );
}

export async function getServerSideProps(context) {
  // بررسی پارامترهای URL
  const { movieId } = context.params;
  //   // درخواست به API برای دریافت داده‌ها بر اساس categoryId
  const movie = await axios.get(
    `http://localhost:5090/site/movie/get/${movieId}`
  );
  const genre = await axios.get(
    `http://localhost:5090/site/genre/get/${movie.data.genreId}`
  );

  const director = await axios.get(
    `http://localhost:5090/site/director/get/${movie.data.directorId}`
  );

  const actors = await axios.get(
    `http://localhost:5090/site/actors/get/${movie.data.movieId}`
  );

  
  return {
    props: {
      movie: movie.data,
      genre: genre.data,
      director:director.data,
      actors:actors.data
    },
  };
}

export default Movies;
