import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { BsPlusCircle } from "react-icons/bs";
import { Formik, Field, Form, ErrorMessage } from "formik";
import Swal from "sweetalert2";
import axios from "axios";
import { FILE_REQUEST_BASE_URL } from "../../../../constants";
import { useDispatch } from "react-redux";
import { CreateGenreService, SearchGenreService } from "@/service/IGenreService";
import { CreateGenreDto } from "@/models/dto/GenreDto";
import { CreateGenreValidationSchema } from "@/models/validation/GenreValidation";

const CreateGenre = () => {
  const [show, setShow] = useState(false);
  const [image, setImage] = useState();
  const dispatch = useDispatch();

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const changeImageHandler = (e) => {
    const selectedFile = e.target.files[0];
    setImage(selectedFile);
  };

  const createGenreSubmitHandler = async (values, { setSubmitting, resetForm }) => {
    try {
      setSubmitting(false);

      const formData = new FormData();
      formData.append("file", image);

      const imageResponse = await axios.post(
        `${FILE_REQUEST_BASE_URL}/api/upload`,
        formData
      );

      const genreData = {
        ...values,
        genreCoverImageUrl: imageResponse.data.filePath,
      };

      dispatch(CreateGenreService(genreData));
      dispatch(SearchGenreService({})); // جایگذاری دیتا در صورت نیاز

      resetForm();
      Swal.fire({
        title: "ثبت شد",
        text: "ژانر با موفقیت ثبت شد.",
        icon: "success",
      });
      setShow(false);
    } catch (error) {
      Swal.fire({
        title: "خطا",
        text: "مشکلی در ثبت ژانر پیش آمد.",
        icon: "error",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <Button variant="success" onClick={handleShow}>
        افزودن ژانر جدید <BsPlusCircle />
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>افزودن ژانر جدید</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Formik
            initialValues={CreateGenreDto}
            validationSchema={CreateGenreValidationSchema}
            onSubmit={createGenreSubmitHandler}
          >
            {({ isSubmitting }) => (
            <Form>
                <div className="form-group">
                  <label className="form-label">نام فارسی ژانر</label>
                  <Field className="form-control" name="genrePersianName" />
                  <ErrorMessage component="span" className="text-danger" name="genrePersianName" />
                </div>

                <div className="form-group">
                  <label className="form-label">نام لاتین ژانر</label>
                  <Field className="form-control" name="genreLatinName" />
                  <ErrorMessage component="span" className="text-danger" name="genreLatinName" />
                </div>

                <div className="form-group">
                  <label className="form-label">توضیحات</label>
                  <Field as="textarea" className="form-control" name="description" />
                  <ErrorMessage component="span" className="text-danger" name="description" />
                </div>

                <div className="form-group">
                  <label className="form-label">خلاصه</label>
                  <Field as="textarea" className="form-control" name="summary" />
                  <ErrorMessage component="span" className="text-danger" name="summary" />
                </div>

                <div className="form-group">
                  <label className="form-label">تصویر ژانر</label>
                  <input type="file" className="form-control" onChange={changeImageHandler} />
                </div>

                <Button variant="success" type="submit" className="mt-3" disabled={isSubmitting}>
                  افزودن ژانر <BsPlusCircle />
                </Button>
              </Form>
            )}
          </Formik>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default CreateGenre;
