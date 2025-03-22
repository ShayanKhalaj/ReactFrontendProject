import React from "react";
import { BsTrash } from "react-icons/bs";


function DeleteBox() {
  return (
    <button
      type="button"
      className="btn btn-danger"
    >
      حذف <BsTrash />
    </button>
  );
}

export default DeleteBox;
