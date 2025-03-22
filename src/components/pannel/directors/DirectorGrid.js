import React from "react";
import { Table, Spinner } from "react-bootstrap";
import { useSelector } from "react-redux";
import UpdateDirector from "./UpdateDirector";
import DeleteDirector from "./DeleteDirector";
import Image from "next/image";

function DirectorGrid() {
  const { DirectorListItems, isLoading } = useSelector((state) => state.directors);
  if (isLoading)
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
    <Table
      bordered
      hover
      striped
      className="text-center justify-content-center align-items-center mt-5"
    >
      <thead>
        <tr>
          <th>عگس</th>
          <th>نام</th>
          <th>نام خانوادگی</th>
          <th>جنسیت</th>
          <th>ملیت</th>
          <th>ویرایش</th>
          <th>حذف</th>
        </tr>
      </thead>
      <tbody>
        {DirectorListItems.map((director) => (
          <tr key={director.directorId}>
            <td><Image src={director.directorImageUrl} width={60} height={40} alt={`${director.firstname} ${director.lastname}`}/></td>
            <td>{director.firstname}</td>
            <td>{director.lastname}</td>
            <td>{director.gender === false ? "زن" : "مرد"}</td>
            <td>{director.nation}</td>
            <td>
              <UpdateDirector director={director} />
            </td>
            <td>
              <DeleteDirector directorId={director.directorId} filePath={director.directorImageUrl} />
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default DirectorGrid;
