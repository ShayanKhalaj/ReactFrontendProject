import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { BsPlusCircle } from "react-icons/bs";
import { Formik, Field, Form, ErrorMessage } from "formik";
import Swal from "sweetalert2";
import axios from "axios";
import { FILE_REQUEST_BASE_URL } from "../../../../constants";
import { useDispatch } from "react-redux";
import { CreateCategoryService, SearchCategoryService } from "@/service/ICategoryService";
import { CreateCategoryDto, SearchCategoryDto } from "@/models/dto/CategoryDto";
import { CreateCategoryValidationSchema } from "@/models/validation/CategoryValidaion";
import Cookies from "js-cookie";

const CreateCategory = () => {
  const [show, setShow] = useState(false);
  const [image, setImage] = useState();
  const dispatch = useDispatch();

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const changeImageHandler = (e) => {
    const selectedFile = e.target.files[0];
    setImage(selectedFile);
  };

  const createCategorySubmitHandler = async (values, { setSubmitting, resetForm }) => {
    try {
      setSubmitting(false);

      const formData = new FormData();
      formData.append("file", image);

      const imageResponse = await axios.post(
        `${FILE_REQUEST_BASE_URL}/api/upload`,
        formData
      );
      const categoryData = {
        ...values,
        categoryImageUrl: imageResponse.data.filePath,
      };

      const token = Cookies.get('token')
      
      dispatch(CreateCategoryService(categoryData));
      dispatch(SearchCategoryService(SearchCategoryDto)); // توجه: بررسی کنید SearchCategoryDto تعریف شده باشد.

      resetForm();
      Swal.fire({
        title: "ثبت شد",
        text: "ثبت با موفقیت انجام شد.",
        icon: "success",
      });
      setShow(false);
    } catch (error) {
      Swal.fire({
        title: "خطا",
        text: "مشکلی در ثبت دسته‌بندی رخ داد.",
        icon: "error",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <Button variant="success" onClick={handleShow}>
        افزودن دسته بندی جدید <BsPlusCircle />
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>افزودن دسته‌بندی جدید</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Formik
            initialValues={CreateCategoryDto}
            validationSchema={CreateCategoryValidationSchema}
            onSubmit={createCategorySubmitHandler}
          >
            {({ isSubmitting }) => (
              <Form>
                <div className="form-group">
                  <label className="form-label">نام فارسی دسته‌بندی</label>
                  <Field className="form-control" name="categoryPersianName" />
                  <ErrorMessage component="span" className="text-danger" name="categoryPersianName" />
                </div>

                <div className="form-group">
                  <label className="form-label">نام لاتین دسته‌بندی</label>
                  <Field className="form-control" name="categoryLatinName" />
                  <ErrorMessage component="span" className="text-danger" name="categoryLatinName" />
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
                  <label className="form-label">عکس دسته‌بندی</label>
                  <input type="file" className="form-control" onChange={changeImageHandler} />
                </div>

                <Button variant="success" type="submit" className="mt-3" disabled={isSubmitting}>
                  افزودن دسته‌بندی <BsPlusCircle />
                </Button>
              </Form>
            )}
          </Formik>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default CreateCategory;
