import React from "react";
import { Spinner, Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import UpdateActor from "./UpdateActor";
import DeleteActor from "./DeleteActor";

function ActorGrid() {
  const { actorListItems, isLoading } = useSelector((state) => state.actors);

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
          <th>عکس</th>
          <th>نام</th>
          <th>نام خانوادگی</th>
          <th>جنسیت</th>
          <th>ملیت</th>
          <th>ویرایش</th>
          <th>حذف</th>
        </tr>
      </thead>
      <tbody>
        {actorListItems.map((actor) => (
          <tr key={actor.actorId}>
            <td>
              <img
                width={80}
                height={40}
                src={actor.actorImageUrl}
                loading="lazy"
                alt={`${actor.firstname} ${actor.lastname}`}
              />
            </td>
            <td>{actor.firstname}</td>
            <td>{actor.lastname}</td>
            <td>{actor.gender===false?"زن":"مرد"}</td>
            <td>{actor.nation}</td>
            <td>
              <UpdateActor actor={actor} />
            </td>
            <td>
              <DeleteActor
                actorId={actor.actorId}
                filePath={actor.actorImageUrl}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default ActorGrid;
