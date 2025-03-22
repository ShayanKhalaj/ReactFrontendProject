import { SearchGenreDto } from "@/models/dto/GenreDto";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  UpdateGenreService,
  SearchGenreService,
} from "@/service/IGenreService";
import Swal from "sweetalert2";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { BsPencil } from "react-icons/bs";
import { Col, Row, Spinner } from "react-bootstrap";
import { UpdateGenreValidationSchema } from "@/models/validation/GenreValidation";

function UpdateGenre({ genre }) {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.genres);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const updateGenreSubmitHandler = async (values, { setSubmitting, resetForm }) => {
    setSubmitting(false);
    try {
       dispatch(UpdateGenreService(values));
       dispatch(SearchGenreService(SearchGenreDto));
      Swal.fire({
        title: "ویرایش شد",
        text: "ویرایش ژانر با موفقیت انجام شد.",
        icon: "success",
      });
      resetForm(true);
    } catch (error) {
      console.error("Error updating genre:", error);
      Swal.fire({
        title: "خطا",
        text: "مشکلی در ویرایش ژانر به وجود آمده است.",
        icon: "error",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <Button variant="warning" onClick={handleShow}>
        ویرایش <BsPencil />
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>ویرایش ژانر</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Formik
            initialValues={genre}
            validationSchema={UpdateGenreValidationSchema}
            onSubmit={updateGenreSubmitHandler}
          >
            {({ isSubmitting }) => (
              <Form>
                <div className="form-group">
                  <label className="form-label">نام فارسی</label>
                  <Field className="form-control" name="genrePersianName" />
                  <ErrorMessage component="span" className="text text-danger" name="genrePersianName" />
                </div>

                <div className="form-group">
                  <label className="form-label">نام لاتین</label>
                  <Field className="form-control" name="genreLatinName" />
                  <ErrorMessage component="span" className="text text-danger" name="genreLatinName" />
                </div>

                <Row className="mt-3">
                  <Col md={6}>
                    <div className="form-group">
                      <label className="form-label">خلاصه</label>
                      <Field as="textarea" className="form-control" name="summary" />
                      <ErrorMessage component="span" className="text text-danger" name="summary" />
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="form-group">
                      <label className="form-label">توضیحات</label>
                      <Field as="textarea" className="form-control" name="description" />
                      <ErrorMessage component="span" className="text text-danger" name="description" />
                    </div>
                  </Col>
                </Row>

                <div className="form-group">
                  <button disabled={isSubmitting} type="submit" className="btn btn-warning mt-3">
                    ویرایش <BsPencil />
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default UpdateGenre;
