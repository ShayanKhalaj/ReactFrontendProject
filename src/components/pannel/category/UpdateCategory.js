import { UpdateCategoryDto, SearchCategoryDto } from "@/models/dto/CategoryDto";
import { UpdateCategoryValidationSchema } from "@/models/validation/CategoryValidaion";
import axios from "axios";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useState } from "react";
import { FILE_REQUEST_BASE_URL } from "../../../../constants";
import { useDispatch, useSelector } from "react-redux";
import {
  UpdateCategoryService,
  SearchCategoryService,
} from "@/service/ICategoryService";
import Swal from "sweetalert2";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { BsPencil, BsPlus, BsPlusCircle } from "react-icons/bs";
import { Col, Row, Spinner } from "react-bootstrap";

function UpdateCategory({ category }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch();
  const {isLoading}=useSelector(state=>state.categories)

  const updateCategorySubmitHandler = async (
    values,
    { setSubmitting, resetForm }
  ) => {
    setSubmitting(true);
    dispatch(await UpdateCategoryService({ ...values }));
    dispatch(await SearchCategoryService(SearchCategoryDto));
    Swal.fire({
      title: "ویرایش شد",
      text: "ویرایش با موفقیت انجام شد.",
      icon: "success",
    });
    resetForm(true)
  };

  if(isLoading===true) return <div className="justify-content-center align-items-center">
    <Spinner variant="warning" size="large"/>
  </div>

  return (
    <>
      <Button variant="warning" onClick={handleShow}>
        ویرایش <BsPencil />
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>ویرایش دسته بندی</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Formik
            initialValues={category}
            validationSchema={UpdateCategoryValidationSchema}
            onSubmit={updateCategorySubmitHandler}
          >
            {(isSubmitting) => {
              return (
                <Form>
                  <div className="form-group x">
                    <label className="form-label">نام فارسی</label>
                    <Field
                      className="form-control"
                      name="categoryPersianName"
                    />
                    <ErrorMessage
                      component="span"
                      className="text text-danger"
                      name="categoryPersianName"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">نام لاتین</label>
                    <Field className="form-control" name="categoryLatinName" />
                    <ErrorMessage
                      component="span"
                      className="text text-danger"
                      name="categoryLatinName"
                    />
                  </div>

                  <div className="form-group" style={{ display: "none" }}>
                    <label className="form-label">عکس</label>
                    <Field name="categoryImageUrl" />
                  </div>

                  <Row className="mt-3">
                    <Col md={6}>
                      <div className="form-group">
                        <label className="form-label">خلاصه</label>
                        <Field
                          as="textarea"
                          className="form-control"
                          name="summary"
                        />
                        <ErrorMessage
                          component="span"
                          className="text text-danger"
                          name="summary"
                        />
                      </div>
                    </Col>
                    <Col md={6}>
                      <div className="form-group">
                        <label className="form-label">توضیحات</label>
                        <Field
                          as="textarea"
                          className="form-control"
                          name="description"
                        />
                        <ErrorMessage
                          component="span"
                          className="text text-danger"
                          name="description"
                        />
                      </div>
                    </Col>
                  </Row>

                  <div className="form-group">
                    {isSubmitting===true ? (
                      <button className="btn btn-warning mt-3 disable" disabled>
                        ویرایش <Spinner variant="warning" size="xl" />
                      </button>
                    ) : (
                      <button className="btn btn-warning mt-3">
                        ویرایش <BsPencil />
                      </button>
                    )}
                  </div>
                </Form>
              );
            }}
          </Formik>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default UpdateCategory;
