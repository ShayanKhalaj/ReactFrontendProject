import { Formik, Field, Form } from "formik";
import React from "react";
import { Card } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";
import CreateActor from "./CreateActor";
import { useDispatch } from "react-redux";
import { SearchActorRepository } from "@/repository/ActorRepository";
import { SearchActorDto } from "@/models/dto/ActorDto";

function SearchActor({ actors }) {
  const dispatch = useDispatch();

  const searchActorSubmitHandler = async (
    values,
    { setSubmitting, resetForm }
  ) => {
    setSubmitting(true);
    dispatch(SearchActorRepository(values));
    resetForm(true);
  };

  return (
    <Card className="mt-3">
      <Card.Title className="mt-2 mx-3">مدیریت بازیگران</Card.Title>
      <Card.Body>
        <Formik
          initialValues={SearchActorDto}
          onSubmit={searchActorSubmitHandler}
        >
          {({ isSubmitting }) => {
            return (
              <Form>
                <div className="form-group">
                  <label className="form-label">نام</label>
                  <Field
                    className="form-control"
                    name="firstname"
                    placeholder="جستجو بر اساس نام"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">نام خانوادگی</label>
                  <Field
                    className="form-control"
                    name="lastname"
                    placeholder="جستجو بر اساس نام خانوادگی"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">جنسیت</label>
                  <Field as="select" className="form-control" name="gender">
                    <option value={true}>مرد</option>
                    <option value={false}>زن</option>
                  </Field>
                </div>

                <div className="form-group">
                  <label className="form-label">ملیت</label>
                  <Field
                    className="form-control"
                    name="nation"
                    placeholder="جستجو بر اساس ملیت"
                  />
                </div>

                <div className="form-group mt-3">
                  <button disabled={isSubmitting} className="btn btn-primary mx-3" type="submit">
                    جستجو <BsSearch />
                  </button>
                  <CreateActor />
                </div>
              </Form>
            );
          }}
        </Formik>
      </Card.Body>
    </Card>
  );
}

export default SearchActor;
