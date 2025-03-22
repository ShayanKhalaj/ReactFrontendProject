import { SearchGenreDto } from "@/models/dto/GenreDto";
import { Field, Form, Formik } from "formik";
import React from "react";
import { BsSearch } from "react-icons/bs";
import CreateGenre from "./CreateGenre";
import { Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { SearchGenreService } from "@/service/IGenreService";

function SearchGenre({ genres }) {
  const dispatch = useDispatch();

  const searchGenreSubmitHandler = async (values, { setSubmitting, resetForm }) => {
    setSubmitting(true);
    dispatch(SearchGenreService(values));
    resetForm(true);
  };

  return (
    <Card className="mt-3">
      <Card.Title className="mt-2 mx-3">
        مدیریت ژانرها
      </Card.Title>
      <Card.Body>
        <Formik
          initialValues={SearchGenreDto}
          onSubmit={searchGenreSubmitHandler}
        >
          {({ isSubmitting }) => {
            return (
              <Form>
                <div className="form-group">
                  <label className="form-label">انتخاب ژانر</label>
                  <Field className="form-select" as='select' name="genreId">
                    <option value="">...انتخاب کنید...</option>
                    {genres?genres.map((item) => {
                      return <option key={item.genreId} value={item.genreId}>{item.genrePersianName}</option>;
                    }):<></>}
                  </Field>
                </div>

                <div className="form-group">
                  <label className="form-label">نام فارسی ژانر</label>
                  <Field className="form-control" name="genrePersianName" />
                </div>

                <div className="form-group mt-3">
                  <button className="btn btn-primary mx-3">جستجو <BsSearch /></button>
                  <CreateGenre />
                </div>
              </Form>
            );
          }}
        </Formik>
      </Card.Body>
    </Card>
  );
}

export default SearchGenre;
