import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { BsPencil } from 'react-icons/bs';
import { Formik, Field, ErrorMessage } from 'formik';
import axios from 'axios';
import Swal from 'sweetalert2';

function UpdateActor({ actor }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const updateActorSubmitHandler = async (values, { setSubmitting, resetForm }) => {
        setSubmitting(true);
        try {
            await axios.put(`/api/actors/${actor.id}`, values);
            Swal.fire({
                title: "ویرایش شد",
                text: "ویرایش با موفقیت انجام شد.",
                icon: "success",
            });
            resetForm(true);
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
                ویرایش بازیگر <BsPencil />
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>ویرایش اطلاعات بازیگر</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Formik
                        initialValues={actor}
                        onSubmit={updateActorSubmitHandler}
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

                                {isSubmitting ? (
                                    <Button variant="warning" type="submit" className="mt-3" disabled>
                                        ویرایش بازیگر
                                    </Button>
                                ) : (
                                    <Button variant="warning" type="submit" className="mt-3">
                                        ویرایش بازیگر <BsPencil />
                                    </Button>
                                )}
                            </Form>
                        )}
                    </Formik>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default UpdateActor;
