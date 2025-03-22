import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { BsPlusCircle } from "react-icons/bs";
import { Formik,Form, Field, ErrorMessage } from "formik";
import Swal from "sweetalert2";
import axios from "axios";
import { FILE_REQUEST_BASE_URL } from "../../../../constants";
import { useDispatch } from "react-redux";
import {
  CreateActorService,
  SearchActorService,
} from "@/service/IActorService";
import { CreateActorValidationSchema } from "@/models/validation/ActorValidation";
import { CreateActorDto, SearchActorDto } from "@/models/dto/ActorDto";
import Cookies from "js-cookie";

const CreateActor = () => {
  const [show, setShow] = useState(false);
  const [image, setImage] = useState();
  const dispatch = useDispatch();

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const changeImageHandler = (e) => {
    setImage(e.target.files[0]);
  };

  const createActorSubmitHandler = async (values, { setSubmitting, resetForm }) => {
    setSubmitting(true);

    const formData = new FormData();
    formData.append("file", image);
    const imageResponse = await axios.post(
      `${FILE_REQUEST_BASE_URL}/api/upload`,
      formData
    );

    const actorData = {
      ...values,
      actorImageUrl: imageResponse.data.filePath,
    };
    const token = Cookies.get("token")
    dispatch(CreateActorService(actorData));
    dispatch(SearchActorService(SearchActorDto));
    resetForm();
    Swal.fire({
      title: "ثبت شد",
      text: "ثبت با موفقیت انجام شد.",
      icon: "success",
    });
    setShow(false);
    setSubmitting(false);
  };

  return (
    <>
      <Button variant="success" onClick={handleShow}>
        افزودن بازیگر <BsPlusCircle />
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>افزودن بازیگر جدید</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Formik
            initialValues={CreateActorDto}
            validationSchema={CreateActorValidationSchema}
            onSubmit={createActorSubmitHandler}
          >
            {({ isSubmitting }) => (
              <Form>
                <div className="form-group">
                  <label className="form-label">نام</label>
                  <Field className="form-control" name="firstname" />
                  <ErrorMessage
                    component="span"
                    className="text-danger"
                    name="firstname"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">نام خانوادگی</label>
                  <Field className="form-control" name="lastname" />
                  <ErrorMessage
                    component="span"
                    className="text-danger"
                    name="lastname"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">جنسیت</label>
                  <Field as="select" className="form-control" name="gender">
                    <option value={false}>زن</option>
                    <option value={true}>مرد</option>
                  </Field>
                  <ErrorMessage
                    component="span"
                    className="text-danger"
                    name="gender"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">عکس</label>
                  <input
                    type="file"
                    className="form-control"
                    onChange={changeImageHandler}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">ملیت</label>
                  <Field className="form-control" name="nation" />
                  <ErrorMessage
                    component="span"
                    className="text-danger"
                    name="nation"
                  />
                </div>

                <Button
                  variant="success"
                  type="submit"
                  className="mt-3"
                  disabled={isSubmitting}
                >
                  افزودن بازیگر <BsPlusCircle />
                </Button>
              </Form>
            )}
          </Formik>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default CreateActor;
