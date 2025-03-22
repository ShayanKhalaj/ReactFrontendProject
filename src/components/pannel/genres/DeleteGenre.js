import { SearchGenreDto } from "@/models/dto/GenreDto";
import {
  DeleteGenreService,
  SearchGenreService,
} from "@/service/IGenreService";
import axios from "axios";
import React from "react";
import { BsTrash } from "react-icons/bs";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { FILE_REQUEST_BASE_URL } from "../../../../constants";

function DeleteGenre({ genreId, filePath }) {
  const dispatch = useDispatch();


  return (
    <button
      type="button"
      className="btn btn-danger"
    >
      حذف <BsTrash />
    </button>
  );
}

export default DeleteGenre;
