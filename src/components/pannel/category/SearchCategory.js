import { CreateCategoryDto, SearchCategoryDto } from "@/models/dto/CategoryDto";
import { Field, Form, Formik } from "formik";
import React from "react";
import { BsSearch } from "react-icons/bs";
import CreateCategory from "./CreateCategory";
import { Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { SearchCategoryService } from "@/service/ICategoryService";
import Cookies from "js-cookie";


function SearchCategory({categories}) {

    const dispatch=useDispatch()

    const searchCategorySubmitHandler=async(values,{setSubmitting,resetForm})=>{
        setSubmitting(true)
        const token = Cookies.get('token')
        dispatch(await SearchCategoryService(values))
        resetForm(true)
    }

  return (
    <Card className="mt-3">
        <Card.Title className="mt-2 mx-3">
            مدیریت دسته بندی ها
        </Card.Title>
        <Card.Body>
        <Formik
      initialValues={CreateCategoryDto}
      onSubmit={searchCategorySubmitHandler}
    >
      {(isSubmitting) => {
        return (
          <Form>
            <div className="form-group">
              <label className="form-label">انتخاب دسته بندی</label>
              <Field className="form-select" as='select' name="categoryId" >
                <option value="">...انتخاب کنید...</option>
                {categories!==null?categories.data.map((item)=>{
                    return <option key={item.categoryId} value={item.categoryId}>{item.categoryPersianName}</option>
                }):<></>}
              </Field>
            </div>

            <div className="form-group">
              <label className="form-label">نام فارسی</label>
              <Field className="form-control" name="categoryPersianName" />
            </div>

            <div className="form-group mt-3">
              <button className="btn btn-primary mx-3">جستجو <BsSearch/></button>
              <CreateCategory/>
            </div>
          </Form>
        );
      }}
    </Formik>
        </Card.Body>
    </Card>
  
  );
}

export default SearchCategory;
