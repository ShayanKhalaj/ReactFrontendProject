import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { BsPencil } from "react-icons/bs";
import { Formik, Field, ErrorMessage } from "formik";
import axios from "axios";
import Swal from "sweetalert2";

function UpdateDirector({ director }) {
    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    const updateDirectorSubmitHandler = async (values, { setSubmitting, resetForm }) => {
        setSubmitting(true);
        try {
            await axios.put(`/api/directors/${director.id}`, values);
            Swal.fire({
                title: "ویرایش شد",
                text: "اطلاعات کارگردان با موفقیت ویرایش شد.",
                icon: "success",
            });
            resetForm();
            handleClose();
        } catch (error) {
            Swal.fire({
                title: "خطا",
                text: "خطایی رخ داده است.",
                icon: "error",
            });
        }
        setSubmitting(false);
    };

    return (
        <>
            <Button variant="warning" onClick={handleShow}>
                ویرایش کارگردان <BsPencil />
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>ویرایش اطلاعات کارگردان</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Formik
                        initialValues={director}
                        onSubmit={updateDirectorSubmitHandler}
                    >
                        {({ isSubmitting }) => (
                            <Form>
                                <div className="form-group">
                                    <label className="form-label">نام</label>
                                    <Field className="form-control" name="firstname" />
                                    <ErrorMessage component="span" className="text-danger" name="firstname" />
                                </div>

                                <div className="form-group">
                                    <label className="form-label">نام خانوادگی</label>
                                    <Field className="form-control" name="lastname" />
                                    <ErrorMessage component="span" className="text-danger" name="lastname" />
                                </div>

                                <div className="form-group">
                                    <label className="form-label">جنسیت</label>
                                    <Field as="select" className="form-control" name="gender">
                                        <option value="Male">مرد</option>
                                        <option value="Female">زن</option>
                                    </Field>
                                    <ErrorMessage component="span" className="text-danger" name="gender" />
                                </div>

                                <div className="form-group">
                                    <label className="form-label">ملیت</label>
                                    <Field className="form-control" name="nation" />
                                    <ErrorMessage component="span" className="text-danger" name="nation" />
                                </div>

                                <Button variant="warning" type="submit" className="mt-3" disabled={isSubmitting}>
                                    {isSubmitting ? "در حال ویرایش..." : <>ویرایش کارگردان <BsPencil /></>}
                                </Button>
                            </Form>
                        )}
                    </Formik>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default UpdateDirector;
