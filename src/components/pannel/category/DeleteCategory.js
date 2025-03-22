import { SearchCategoryDto } from "@/models/dto/CategoryDto";
import {
  DeleteCategoryService,
  SearchCategoryService,
} from "@/service/ICategoryService";
import axios from "axios";
import React from "react";
import { BsTrash } from "react-icons/bs";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { FILE_REQUEST_BASE_URL } from "../../../../constants";

function DeleteCategory({ categoryId,filePath }) {
  const dispatch = useDispatch();

  const clickCategoryDeleteHandler = async () => {
    Swal.fire({
      title: "آیا مطمئن هستید?",
      text: "دسته بندی بعد از حذف قابل بازیابی نمیباشد!",
      icon: "warning",
      showCancelButton: true,
      cancelButtonText:'انصراف',
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "بله، حذف کن!",
    }).then(async(result) => {
      if (result.isConfirmed) {
        if(filePath){
           const response =  await axios.post(`${FILE_REQUEST_BASE_URL}/api/unlink`,{filePath:filePath})
           if(response.data.success===true){
               dispatch(DeleteCategoryService(categoryId));
               dispatch(SearchCategoryService(SearchCategoryDto));
               Swal.fire({
                title: "حذف شد!",
                text: "حذف با موفقیت انجام شد.",
                icon: "success",
              });
           }
        }
      }
    });
  };

  return (
    <button
      type="button"
      className="btn btn-danger"
      onClick={clickCategoryDeleteHandler}
    >
      حذف <BsTrash />
    </button>
  );
}

export default DeleteCategory;
