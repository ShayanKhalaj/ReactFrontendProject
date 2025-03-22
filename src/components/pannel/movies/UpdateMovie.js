import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { BsPencil, BsPlusCircle } from 'react-icons/bs';
import { Formik, Field, ErrorMessage } from 'formik';

function UpdateMovie() {
    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    return (
        <>
            <Button variant="warning" onClick={handleShow}>
                ویرایش فیلم <BsPencil />
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>ویرایش فیلم</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Formik>
                        <Form>
                            <div className="form-group">
                                <label className="form-label">
                                    انتخاب ژانر
                                </label>
                                <Field
                                    className="form-select"
                                    as="select"
                                    name="directorId"
                                >
                                    <option value="">...انتخاب کنید...</option>
                                </Field>
                            </div>

                            <div className="form-group">
                                <label className="form-label">
                                    انتخاب دسته بندی
                                </label>
                                <Field
                                    className="form-select"
                                    as="select"
                                    name="categoryId"
                                >
                                    <option value="">...انتخاب کنید...</option>
                                </Field>
                            </div>
                            <div className="form-group">
                                <label className="form-label">
                                    عنوان فارسی
                                </label>
                                <Field
                                    className="form-control"
                                    name="moviePersianTitle"
                                />
                                <ErrorMessage
                                    component="span"
                                    className="text-danger"
                                    name="moviePersianTitle"
                                />
                            </div>

                            <div className="form-group">
                                <label className="form-label">
                                    عنوان لاتین
                                </label>
                                <Field
                                    className="form-control"
                                    name="movieLatinTitle"
                                />
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
                                <label className="form-label">کشور</label>
                                <Field
                                    className="form-control"
                                    name="country"
                                />
                                <ErrorMessage
                                    component="span"
                                    className="text-danger"
                                    name="country"
                                />
                            </div>

                            <div className="form-group">
                                <label className="form-label">
                                    مدت زمان (دقیقه)
                                </label>
                                <Field
                                    className="form-control"
                                    type="number"
                                    name="duration"
                                />
                                <ErrorMessage
                                    component="span"
                                    className="text-danger"
                                    name="duration"
                                />
                            </div>

                            <div className="form-group">
                                <label className="form-label">URL تریلر</label>
                                <Field
                                    className="form-control"
                                    name="movieTrailerVideoUrl"
                                />
                                <ErrorMessage
                                    component="span"
                                    className="text-danger"
                                    name="movieTrailerVideoUrl"
                                />
                            </div>

                            <div className="form-group">
                                <label className="form-label">ویدئو</label>
                                <Field
                                    className="form-control"
                                    name="movieVideoUrl"
                                />
                                <ErrorMessage
                                    component="span"
                                    className="text-danger"
                                    name="movieVideoUrl"
                                />
                            </div>

                            <div className="form-group">
                                <label className="form-label">
                                    انتخاب کارگردان
                                </label>
                                <Field
                                    className="form-select"
                                    as="select"
                                    name="directorId"
                                >
                                    <option value="">...انتخاب کنید...</option>
                                </Field>
                            </div>

                            <div className="form-group">
                                <label className="form-label">
                                    آیا رایگان است؟
                                </label>
                                <input type="checkbox" className="form-check" />
                            </div>

                            <Button
                                variant="warning"
                                type="submit"
                                className="mt-3"
                            >
                                ویرایش فیلم <BsPlusCircle />
                            </Button>
                        </Form>
                    </Formik>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default UpdateMovie;
