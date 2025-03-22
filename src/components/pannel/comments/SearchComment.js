import { Formik, Field, Form } from 'formik';
import React from 'react';
import { Card } from 'react-bootstrap';
import { BsSearch } from 'react-icons/bs';
import AnswerComment from './AnswerComment';

function SearchComment() {
    return (
        <Card className="mt-3">
            <Card.Title className="mt-2 mx-3">مدیریت کامنت‌ها</Card.Title>
            <Card.Body>
                <Formik>
                    <Form>
                        <div className="form-group">
                            <label className="form-label">انتخاب فیلم</label>
                            <Field
                                className="form-select"
                                as="select"
                                name="movieId"
                            >
                                <option value="">...انتخاب کنید...</option>
                            </Field>
                        </div>

                        <div className="form-group mt-3">
                            <button
                                className="btn btn-primary mx-3"
                                type="submit"
                            >
                                جستجو <BsSearch />
                            </button>

                        </div>
                    </Form>
                </Formik>
            </Card.Body>
        </Card>
    );
}

export default SearchComment;
