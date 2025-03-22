import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { BsPencil } from 'react-icons/bs';
import { Formik, Field, ErrorMessage } from 'formik';

function AnswerComment() {
    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    return (
        <>
            <Button variant="warning" onClick={handleShow}>
                پاسخ <BsPencil />
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>پاسخ به نظر</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Formik>
                        <Form>
                            <div className="form-group">
                                <label className="form-label">پاسخ</label>
                                <Field
                                    as="textarea"
                                    className="form-control"
                                    name="answer"
                                />
                                <ErrorMessage
                                    component="span"
                                    className="text-danger"
                                    name="answer"
                                />
                            </div>

                            <Button
                                variant="warning"
                                type="submit"
                                className="mt-3"
                            >
                                پاسخ <BsPencil />
                            </Button>
                        </Form>
                    </Formik>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default AnswerComment;
