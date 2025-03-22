import { Formik, Field, Form } from "formik";
import React, { useMemo } from "react";
import { Card } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";
import CreateDirector from "./CreateDirector";
import { useDispatch } from "react-redux";
import { SearchDirectorRepository } from "@/repository/DirectorRepository";
import { SearchDirectorDto } from "@/models/dto/DirectorDto";
import { useRouter } from "next/router";
import { SearchDirectorService } from "@/service/IDirectorService";

function SearchDirector() {
  const dispatch = useDispatch();

  const searchDirectorSubmitHandler = async (
    values,
    { setSubmitting, resetForm }
  ) => {
    setSubmitting(true);
    dispatch(SearchDirectorService(values));
    resetForm(true);
  };

  return (
    <Card className="mt-3">
      <Card.Title className="mt-2 mx-3">مدیریت کارگردان‌ها</Card.Title>
      <Card.Body>
        <Formik
          initialValues={SearchDirectorDto}
          onSubmit={searchDirectorSubmitHandler}
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
                  <CreateDirector />
                </div>
              </Form>
            );
          }}
        </Formik>
      </Card.Body>
    </Card>
  );
}

export default SearchDirector;
