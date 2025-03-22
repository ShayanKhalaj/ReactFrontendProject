import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { BsPencil } from 'react-icons/bs';
import { Formik, Field, ErrorMessage } from 'formik';

function UpdateSlider() {
    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    return (
        <>
            <Button variant="warning" onClick={handleShow}>
                ویرایش اسلایدر <BsPencil />
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>ویرایش اسلایدر</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Formik>
                        <Form>
                            <div className="form-group">
                                <label className="form-label">عنوان فارسی</label>
                                <Field
                                    className="form-control"
                                    name="sliderPersianTitle"
                                />
                                <ErrorMessage
                                    component="span"
                                    className="text-danger"
                                    name="sliderPersianTitle"
                                />
                            </div>

                            <div className="form-group">
                                <label className="form-label">عنوان لاتین</label>
                                <Field
                                    className="form-control"
                                    name="sliderLatinTitle"
                                />
                                <ErrorMessage
                                    component="span"
                                    className="text-danger"
                                    name="sliderLatinTitle"
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
                                <label className="form-label">صفحه URL</label>
                                <Field
                                    className="form-control"
                                    name="pageUrl"
                                />
                                <ErrorMessage
                                    component="span"
                                    className="text-danger"
                                    name="pageUrl"
                                />
                            </div>

                            <Button
                                variant="warning"
                                type="submit"
                                className="mt-3"
                            >
                                ویرایش اسلایدر <BsPencil />
                            </Button>
                        </Form>
                    </Formik>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default UpdateSlider;
