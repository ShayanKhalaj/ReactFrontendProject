import { Field, Form, Formik } from "formik";
import React from "react";
import { BsSearch } from "react-icons/bs";
import { Card } from "react-bootstrap";
import CreateBox from "./CreateBox";


function SearchBox({categories,movies}) {

  return (
    <Card className="mt-3">
        <Card.Title className="mt-2 mx-3">
            مدیریت جعبه های نمایش
        </Card.Title>
        <Card.Body>
        <Formik
    >
          <Form>
            <div className="form-group">
              <label className="form-label">انتخاب جعبه نمایش</label>
              <Field className="form-select" as='select' name="boxId" >
                <option value="">...انتخاب کنید...</option>
              </Field>
            </div>

            <div className="form-group">
              <label className="form-label">نام فارسی</label>
              <Field className="form-control" name="boxPersianTitle" />
            </div>

            <div className="form-group mt-3">
              <button className="btn btn-primary mx-3">جستجو <BsSearch/></button>
              <CreateBox categories={categories} movies={movies}/>
            </div>
          </Form>
    </Formik>
        </Card.Body>
    </Card>
  
  );
}

export default SearchBox;
