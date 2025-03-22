import Image from "next/image";
import React from "react";
import { Spinner, Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import UpdateGenre from "./UpdateGenre";
import DeleteGenre from "./DeleteGenre";

function GenreGrid() {
  const { GenreListItems, isLoading } = useSelector(
    (state) => state.genres
  );

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
          <th>نام فارسی</th>
          <th>نام لاتین</th>
          <th>خلاصه</th>
          <th>توضیحات</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {GenreListItems.map((item) => {
          return (
            <tr key={item.genreId}>
              <td>
                <Image
                  key={item.genreId}
                  width={80}
                  height={40}
                  src={item.genreCoverImageUrl}
                  loading="lazy"
                  alt={item.genrePersianName}
                />
              </td>
              <td>{item.genrePersianName}</td>
              <td>{item.genreLatinName}</td>
              <td>{item.summary}</td>
              <td>{item.description}</td>
              <td>
                <UpdateGenre genre={item} />
              </td>
              <td>
                <DeleteGenre genreId={item.genreId} filePath={item.genreCoverImageUrl} />
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}

export default GenreGrid;
