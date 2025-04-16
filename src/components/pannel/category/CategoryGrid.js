import Image from "next/image";
import React from "react";
import { Spinner, Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import UpdateCategory from "./UpdateCategory";
import DeleteCategory from "./DeleteCategory";

function CategoryGrid() {
  const { categoryListItems, isLoading } = useSelector(
    (state) => state.categories
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
        {categoryListItems.map((item) => {
          return (
            <tr key={item.categoryId}>
              <td>
                <Image
                  key={item.categoryId}
                  width={80}
                  height={40}
                  src={item.categoryImageUrl}
                  loading="lazy"
                  alt={item.categoryPersianName}
                />
              </td>
              <td>{item.categoryPersianName}</td>
              <td>{item.categoryLatinName}</td>
              <td>{item.summary}</td>
              <td>{item.description}</td>
              <td>
                <UpdateCategory category={item}/>
              </td>
              <td>
                <DeleteCategory categoryId={item.categoryId} filePath={item.categoryImageUrl}/>
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}

export default React.memo(CategoryGrid);
