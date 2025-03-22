import { Formik, Field, Form } from 'formik';
import React from 'react';
import { Card } from 'react-bootstrap';
import { BsSearch } from 'react-icons/bs';
import CreateMovie from './CreateMovie';

function SearchMovie({GenreList,DirectorList,CategoryList}) {
    return (
        <Card className="mt-3">
            <Card.Title className="mt-2 mx-3">
                مدیریت فیلم‌ها
            </Card.Title>
            <Card.Body>
                <Formik>
                    <Form>
                        <div className="form-group">
                                      <label className="form-label">انتخاب دسته بندی</label>
                                      <Field className="form-select" as='select' name="movieId" >
                                        <option value="">...انتخاب کنید...</option>
                                      </Field>
                                    </div>
                        
                        <div className="form-group">
                            <label className="form-label">عنوان فارسی</label>
                            <Field
                                className="form-control"
                                name="moviePersianTitle"
                                placeholder="جستجو بر اساس عنوان فارسی"
                            />
                        </div>


                        <div className="form-group mt-3">
                            <button className="btn btn-primary mx-3" type="submit">
                                جستجو <BsSearch />
                            </button>
                            <CreateMovie GenreList={GenreList} DirectorList={DirectorList} CategoryList={CategoryList} />
                        </div>
                    </Form>
                </Formik>
            </Card.Body>
        </Card>
    );
}

export default SearchMovie;
