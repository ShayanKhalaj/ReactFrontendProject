import { ErrorMessage, Field, Form, Formik } from 'formik';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { BsPlusCircle } from 'react-icons/bs';

function AddSliderMovie() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="info" onClick={handleShow}>
                ثبت فیلم <BsPlusCircle />
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title>ثبت فیلم در اسلایدر</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Formik>
                        <Form>
                            <div className="form-group">
                                <label className="form-label">
                                    انتخاب فیلم
                                </label>
                                <Field
                                    className="form-select"
                                    as="select"
                                    name="movieId"
                                >
                                    <option value="">...انتخاب کنید...</option>
                                </Field>
                                <ErrorMessage
                                    component="span"
                                    className="text text-danger"
                                />
                            </div>

                            <div className="form-group">
                                <button className="btn btn-info mt-3">
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

export default AddSliderMovie;
