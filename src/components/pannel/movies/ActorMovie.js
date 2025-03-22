import { CreateActorMovieDto } from "@/models/dto/MovieDto";
import axios from "axios";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { BsPlusCircle } from "react-icons/bs";
import { BASE_URL } from "../../../../constants";
import Swal from "sweetalert2";

function ActorMovie({ ActorList, movieId }) {
  const [show, setShow] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => {
    setErrorMessage("");
    setShow(true);
  };

  const submitActorMovieCreateHandler = async (
    values,
    { setSubmitting, resetForm }
  ) => {
    try {
      const response = await axios.post(
        `${BASE_URL}/pannel/actorMovies/create`,
        {
          ...values,
          movieId: movieId,
        }
      );

      Swal.fire({
        title: "ثبت شد",
        text: "فیلم جدید با موفقیت ثبت شد.",
        icon: "success",
      });
      resetForm();
      handleClose();
    } catch (error) {
      setErrorMessage(
        error.response?.data?.message || "خطایی در ارتباط با سرور رخ داد."
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <Button variant="info" onClick={handleShow}>
        ثبت بازیگر <BsPlusCircle />
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>ثبت بازیگر در فیلم</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {errorMessage && (
            <div className="alert alert-danger">{errorMessage}</div>
          )}
          <Formik
            initialValues={CreateActorMovieDto}
            onSubmit={submitActorMovieCreateHandler}
          >
            {({ isSubmitting }) => (
              <Form>
                <div className="form-group">
                  <label className="form-label">انتخاب بازیگر</label>
                  <Field className="form-select" as="select" name="actorId">
                    <option value="">...انتخاب کنید...</option>
                    {ActorList.map((item) => (
                      <option key={item.actorId} value={item.actorId}>
                        {item.firstname} {item.lastname}
                      </option>
                    ))}
                  </Field>
                  <ErrorMessage
                    name="actorId"
                    component="span"
                    className="text text-danger"
                  />
                </div>

                <div className="form-group">
                  <button
                    className="btn btn-info mt-3"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "در حال ارسال..." : "ثبت"} <BsPlusCircle />
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ActorMovie;
