import { ErrorMessage, Field, Form, Formik } from 'formik';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { BsPlusCircle } from 'react-icons/bs';

function UpdateBox() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="warning" onClick={handleShow}>
                ویرایش دسته بندی جدید <BsPlusCircle />
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title>ویرایش جعبه نمایش</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Formik>
                        <Form>
                            <div className="form-group x">
                                <label className="form-label">نام فارسی</label>
                                <Field
                                    className="form-control"
                                    name="boxPersianTitle"
                                />
                                <ErrorMessage
                                    component="span"
                                    className="text text-danger"
                                    name="boxPersianTitle"
                                />
                            </div>

                            <div className="form-group">
                                <label className="form-label">نام لاتین</label>
                                <Field
                                    className="form-control"
                                    name="boxLatinTitle"
                                />
                                <ErrorMessage
                                    component="span"
                                    className="text text-danger"
                                    name="boxLatinTitle"
                                />
                            </div>

                            <div className="form-group">
                                <label className="form-label">موقعیت</label>
                                <Field
                                    className="form-control"
                                    name="position"
                                />
                                <ErrorMessage
                                    component="span"
                                    className="text text-danger"
                                    name="position"
                                />
                            </div>

                            <div className="form-group">
                                <label className="form-label">آدرس صفحه</label>
                                <Field
                                    className="form-control"
                                    name="pageUrl"
                                />
                                <ErrorMessage
                                    component="span"
                                    className="text text-danger"
                                    name="pageUrl"
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
                                    className="text text-danger"
                                    name="description"
                                />
                            </div>

                            <div className="form-group">
                                <button className="btn btn-warning mt-3">
                                    ثبت <BsPlusCircle />
                                </button>
                            </div>
                        </Form>
                    </Formik>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default UpdateBox;
