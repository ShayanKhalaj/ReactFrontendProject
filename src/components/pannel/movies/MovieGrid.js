import Image from "next/image";
import React from "react";
import { Spinner, Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import UpdateMovie from "./UpdateMovie";
import DeleteMovie from "./DeleteMovie";
import ActorMovie from "./ActorMovie";

function MovieGrid({ActorList}) {
  const { MovieListItems, isLoading } = useSelector((state) => state.movies);

  if (isLoading === true)
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Spinner variant="info" size="large" />
      </div>
    );

  return (
    <Table bordered hover striped className="text-center justify-content-center align-items-center mt-5">
      <thead>
        <tr>
          <th>عکس</th>
          <th>عنوان فارسی</th>
          <th>عنوان لاتین</th>
          <th>خلاصه</th>
          <th>توضیحات</th>
          <th>کشور</th>
          <th>زمان</th>
          <th>رده سنی</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {MovieListItems.map((item) => {
          return (
            <tr key={item.movieId}>
              <td>
                <Image
                  key={item.movieId}
                  width={80}
                  height={40}
                  src={item.movieCoverImageUrl}
                  loading="lazy"
                  alt={item.moviePersianTitle}
                />
              </td>
              <td>{item.moviePersianTitle}</td>
              <td>{item.movieLatinTitle}</td>
              <td>{item.summary}</td>
              <td>{item.description}</td>
              <td>{item.country}</td>
              <td>{item.duratoin}</td>
              <td>{item.minAge}+</td>
              <td>
                <UpdateMovie movie={item} />
              </td>
              <td>
                <ActorMovie
                  movieId={item.movieId}
                  ActorList={ActorList}
                />
              </td>
              <td>
                <DeleteMovie
                  movieId={item.movieId}
                  filePath={item.movieCoverImageUrl}
                />
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}

export default MovieGrid;
