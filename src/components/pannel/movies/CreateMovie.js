import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { BsPlusCircle } from "react-icons/bs";
import Swal from "sweetalert2";
import axios from "axios";
import { FILE_REQUEST_BASE_URL } from "../../../../constants";
import { useDispatch } from "react-redux";
import {
  CreateMovieService,
  SearchMovieService,
} from "@/service/IMovieService";
import { CreateMovieDto, SearchMovieDto } from "@/models/dto/MovieDto";
import { CreateMovieValidationSchema } from "@/models/validation/MovieValidation";
import { ErrorMessage, Field, Form, Formik } from "formik";

const CreateMovie = ({ GenreList, DirectorList, CategoryList }) => {
  const [show, setShow] = useState(false);
  const [image, setImage] = useState();
  const [trailer, setTrailer] = useState();
  const [video, setVideo] = useState();
  const dispatch = useDispatch();

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const changeImageHandler = (e) => {
    const selectedFile = e.target.files[0];
    setImage(selectedFile);
  };

  const changeTrailerHandler = (e) => {
    const selectedFile = e.target.files[0];
    setTrailer(selectedFile);
  };

  const changeMovieVideoHandler = (e) => {
    const selectedFile = e.target.files[0];
    setVideo(selectedFile);
  };

  const createMovieSubmitHandler = async (
    values,
    { setSubmitting, resetForm }
  ) => {
    try {
      setSubmitting(true);

      // Upload files (image, trailer, video)
      const imageFormData = new FormData();
      imageFormData.append("file", image);

      const trailerFormData = new FormData();
      trailerFormData.append("file", trailer);

      const videoFormData = new FormData();
      videoFormData.append("file", video);

      const imageResponse = await axios.post(
        `${FILE_REQUEST_BASE_URL}/api/upload`,
        imageFormData
      );
      const trailerResponse = await axios.post(
        `${FILE_REQUEST_BASE_URL}/api/upload`,
        trailerFormData
      );
      const videoResponse = await axios.post(
        `${FILE_REQUEST_BASE_URL}/api/upload`,
        videoFormData
      );
      
      
      
      const movieData = {
        ...values,
      movieCoverImageUrl: imageResponse.data.filePath,
      movieTrailerVideoUrl: trailerResponse.data.filePath,
      movieVideoUrl: videoResponse.data.filePath,
      };

      dispatch(CreateMovieService(movieData));
      dispatch(SearchMovieService(SearchMovieDto));

      resetForm();
      Swal.fire({
        title: "ثبت شد",
        text: "فیلم جدید با موفقیت ثبت شد.",
        icon: "success",
      });
      setShow(false);
    } catch (error) {
      Swal.fire({
        title: "خطا",
        text: "مشکلی در ثبت فیلم رخ داد.",
        icon: "error",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <Button variant="success" onClick={handleShow}>
        افزودن فیلم جدید <BsPlusCircle />
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>افزودن فیلم جدید</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Formik
            initialValues={CreateMovieDto}
            validationSchema={CreateMovieValidationSchema}
            onSubmit={createMovieSubmitHandler}
          >
            {({ isSubmitting }) => (
              <Form>
                <div className="form-group">
                  <label className="form-label">دسته بندی</label>
                  <Field as="select" className="form-select" name="categoryId">
                  <option value="">...انتخاب...</option>
                    {CategoryList.map((item, index) => {
                      return (
                        <option key={item.categoryId} value={item.categoryId}>
                          {item.categoryPersianName}
                        </option>
                      );
                    })}
                  </Field>
                  <ErrorMessage
                    component="span"
                    className="text-danger"
                    name="categoryId"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">ژانر</label>
                  <Field as="select" className="form-select" name="genreId">
                  <option value="">...انتخاب...</option>
                    {GenreList.map((item, index) => {
                      return (
                        <option key={item.genreId} value={item.genreId}>
                          {item.genrePersianName}
                        </option>
                      );
                    })}
                  </Field>
                  <ErrorMessage
                    component="span"
                    className="text-danger"
                    name="genreId"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">کارگردان</label>
                  <Field as="select" className="form-select" name="directorId">
                  <option value="">...انتخاب...</option>
                    {DirectorList.map((item, index) => {
                      return (
                        <option key={item.directorId} value={item.directorId}>
                          {item.firstname} {item.lastname}
                        </option>
                      );
                    })}
                  </Field>
                  <ErrorMessage
                    component="span"
                    className="text-danger"
                    name="directorId"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">عنوان فارسی فیلم</label>
                  <Field className="form-control" name="moviePersianTitle" />
                  <ErrorMessage
                    component="span"
                    className="text-danger"
                    name="moviePersianTitle"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">عنوان لاتین فیلم</label>
                  <Field className="form-control" name="movieLatinTitle" />
                  <ErrorMessage
                    component="span"
                    className="text-danger"
                    name="movieLatinTitle"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">توضیحات</label>
                  <Field
                    as="textarea"
                    className="form-control"
                    name="description"
                  />
                  <ErrorMessage
                    component="span"
                    className="text-danger"
                    name="description"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">خلاصه</label>
                  <Field
                    as="textarea"
                    className="form-control"
                    name="summary"
                  />
                  <ErrorMessage
                    component="span"
                    className="text-danger"
                    name="summary"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">کشور</label>
                  <Field className="form-control" name="country" />
                  <ErrorMessage
                    component="span"
                    className="text-danger"
                    name="country"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">مدت زمان</label>
                  <Field
                    type="text"
                    className="form-control"
                    name="duratoin"
                  />
                  <ErrorMessage
                    component="span"
                    className="text-danger"
                    name="duratoin"
                  />
                </div>

                
                <div className="form-group">
                  <label className="form-label">مناسب برای سن</label>
                  <Field
                    type="number"
                    className="form-control"
                    name="minAge"
                  />
                  <ErrorMessage
                    component="span"
                    className="text-danger"
                    name="minAge"
                  />
                </div>

                      <div className="form-group">
                  <label className="form-label">فیلم رایگان</label>
                  <Field
                    type="checkbox"
                    className="form-check"
                    name="isFree"
                  />
                  <ErrorMessage
                    component="span"
                    className="text-danger"
                    name="isFree"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">عکس کاور</label>
                  <input
                    type="file"
                    className="form-control"
                    onChange={changeImageHandler}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">تریلر</label>
                  <input
                    type="file"
                    className="form-control"
                    onChange={changeTrailerHandler}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">فیلم</label>
                  <input
                    type="file"
                    className="form-control"
                    onChange={changeMovieVideoHandler}
                  />
                </div>

                <Button
                  variant="success"
                  type="submit"
                  className="mt-3"
                >
                  افزودن فیلم <BsPlusCircle />
                </Button>
              </Form>
            )}
          </Formik>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default CreateMovie;
