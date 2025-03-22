import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { BsPlusCircle } from "react-icons/bs";
import { Formik, Field, Form, ErrorMessage, FieldArray } from "formik";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { CreateSliderService, SearchSliderService } from "@/service/ISliderService";
import { CreateSliderDto } from "@/models/dto/SliderDto"; // همونطور که مدل رو تعریف کردی
import { CreateSliderValidationSchema } from "@/models/validation/SliderValidation";

const CreateSlider = ({ categories, moviesList }) => {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const createSliderSubmitHandler = async (values, { setSubmitting, resetForm }) => {
    try {
      setSubmitting(true);
      await dispatch(CreateSliderService(values));
      await dispatch(SearchSliderService({}));
      
      resetForm();
      Swal.fire({
        title: "ثبت شد",
        text: "اسلایدر با موفقیت ثبت شد.",
        icon: "success",
      });
      setShow(false);
    } catch (error) {
      Swal.fire({
        title: "خطا",
        text: "مشکلی در ثبت اسلایدر پیش آمد.",
        icon: "error",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <Button variant="success" onClick={handleShow}>
        افزودن اسلایدر جدید <BsPlusCircle />
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>افزودن اسلایدر جدید</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Formik
            initialValues={CreateSliderDto}  // استفاده از مدل
            validationSchema={CreateSliderValidationSchema}
            onSubmit={createSliderSubmitHandler}
          >
            {({ isSubmitting, values }) => (
              <Form>
                <div className="form-group">
                  <label className="form-label">عنوان فارسی</label>
                  <Field className="form-control" name="sliderPersianTitle" />
                  <ErrorMessage component="span" className="text-danger" name="sliderPersianTitle" />
                </div>

                <div className="form-group">
                  <label className="form-label">عنوان لاتین</label>
                  <Field className="form-control" name="sliderLatinTitle" />
                  <ErrorMessage component="span" className="text-danger" name="sliderLatinTitle" />
                </div>

                <div className="form-group">
                  <label className="form-label">خلاصه</label>
                  <Field className="form-control" name="summary" />
                  <ErrorMessage component="span" className="text-danger" name="summary" />
                </div>

                <div className="form-group">
                  <label className="form-label">توضیحات</label>
                  <Field as="textarea" className="form-control" name="description" />
                  <ErrorMessage component="span" className="text-danger" name="description" />
                </div>

                <div className="form-group">
                  <label className="form-label">دسته بندی</label>
                  <Field as="select" className="form-control" name="categoryId">
                    <option value="">...انتخاب کنید...</option>
                    {categories.map((item, index) => (
                      <option key={index} value={item.categoryId}>
                        {item.categoryPersianName}
                      </option>
                    ))}
                  </Field>
                  <ErrorMessage component="span" className="text-danger" name="categoryId" />
                </div>

                <FieldArray
                  name="movies"
                  render={({ push, remove }) => (
                    <div>
                      <label className="form-label">فیلم‌ها</label>
                      {values.movies.map((movie, index) => (
                        <div key={index} className="form-group">
                          <div className="d-flex align-items-center">
                            <Field as="select" className="form-control" name={`movies[${index}].movieId`}>
                              <option value="">...انتخاب کنید...</option>
                              {moviesList && moviesList.length > 0 ? (
                                moviesList.map((movieItem, i) => (
                                  <option key={i} value={movieItem.movieId}>
                                    {movieItem.moviePersianTitle}
                                  </option>
                                ))
                              ) : (
                                <option value="">هیچ فیلمی موجود نیست</option>
                              )}
                            </Field>
                            <Button variant="danger" onClick={() => remove(index)} className="ml-2">
                              حذف
                            </Button>
                          </div>
                          <ErrorMessage component="span" className="text-danger" name={`movies[${index}].movieId`} />
                        </div>
                      ))}
                      <Button type="button" variant="primary" onClick={() => push({ movieId: '' })}>
                        افزودن فیلم
                      </Button>
                    </div>
                  )}
                />

                <Button variant="success" type="submit" className="mt-3" disabled={isSubmitting}>
                  {isSubmitting ? "در حال ارسال..." : "افزودن اسلایدر"}
                  <BsPlusCircle />
                </Button>
              </Form>
            )}
          </Formik>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default CreateSlider;
