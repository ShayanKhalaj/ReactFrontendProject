import { Formik, Field, Form } from 'formik';
import React from 'react';
import { Card } from 'react-bootstrap';
import { BsSearch } from 'react-icons/bs';
import CreateSlider from './CreateSlider';

function SearchSlider({ categories,movies}) {
    return (
        <Card className="mt-3">
            <Card.Title className="mt-2 mx-3">مدیریت اسلایدرها</Card.Title>
            <Card.Body>
                <Formik>
                    <Form>
                        <div className="form-group">
                            <label className="form-label">انتخاب اسلایدر</label>
                            <Field
                                className="form-select"
                                as="select"
                                name="sliderId"
                            >
                                <option value="">...انتخاب کنید...</option>
                            </Field>
                        </div>
                        <div className="form-group">
                            <label className="form-label">عنوان فارسی</label>
                            <Field
                                className="form-control"
                                name="sliderPersianTitle"
                                placeholder="جستجو بر اساس عنوان فارسی"
                            />
                        </div>

                        <div className="form-group mt-3">
                            <button
                                className="btn btn-primary mx-3"
                                type="submit"
                            >
                                جستجو <BsSearch />
                            </button>
                            <CreateSlider  categories={categories} moviesList={movies} />
                        </div>
                    </Form>
                </Formik>
            </Card.Body>
        </Card>
    );
}

export default SearchSlider;
