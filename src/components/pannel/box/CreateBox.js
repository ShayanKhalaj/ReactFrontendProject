import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { BsPlusCircle } from "react-icons/bs";
import { Formik, Field, Form, ErrorMessage, FieldArray } from "formik";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { CreateBoxService, SearchBoxService } from "@/service/IBoxService";
import { CreateBoxDto } from "@/models/dto/BoxDto"; // مدل باکس
import { CreateBoxValidationSchema } from "@/models/validation/BoxValidation"; // اسکیمای اعتبارسنجی

const CreateBox = ({ categories, movies }) => {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const createBoxSubmitHandler = async (values, { setSubmitting, resetForm }) => {
    try {
      setSubmitting(true);
      // درخواست برای ایجاد جعبه نمایش
      await dispatch(CreateBoxService(values));
      // جستجو برای به روز رسانی لیست
      await dispatch(SearchBoxService({}));

      // بازنشانی فرم و نمایش پیام موفقیت
      resetForm();
      Swal.fire({
        title: "ثبت شد",
        text: "جعبه نمایش با موفقیت ثبت شد.",
        icon: "success",
      });
      setShow(false);
    } catch (error) {
      Swal.fire({
        title: "خطا",
        text: "مشکلی در ثبت جعبه نمایش پیش آمد.",
        icon: "error",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <Button variant="success" onClick={handleShow}>
        ثبت جعبه نمایش جدید <BsPlusCircle />
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>افزودن جعبه نمایش جدید</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Formik
            initialValues={CreateBoxDto}  // مدل اولیه
            validationSchema={CreateBoxValidationSchema}
            onSubmit={createBoxSubmitHandler}
          >
            {({ isSubmitting, values }) => (
              <Form>
                <div className="form-group">
                  <label className="form-label">نام فارسی</label>
                  <Field className="form-control" name="boxPersianTitle" />
                  <ErrorMessage component="span" className="text-danger" name="boxPersianTitle" />
                </div>

                <div className="form-group">
                  <label className="form-label">نام لاتین</label>
                  <Field className="form-control" name="boxLatinTitle" />
                  <ErrorMessage component="span" className="text-danger" name="boxLatinTitle" />
                </div>

                <div className="form-group">
                  <label className="form-label">موقعیت</label>
                  <Field type="number" className="form-control" name="position" />
                  <ErrorMessage component="span" className="text-danger" name="position" />
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
                              {movies && movies.length > 0 ? (
                                movies.map((movieItem, i) => (
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
                  {isSubmitting ? "در حال ارسال..." : "ثبت جعبه نمایش"} <BsPlusCircle />
                </Button>
              </Form>
            )}
          </Formik>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default CreateBox;
