// import { RegisterDto } from '@/models/dto/UserDto';
// import axios from 'axios';
// import { Field, Form, Formik, ErrorMessage } from 'formik';
// import { BASE_URL } from '../../../constants';

// function Register() {

//   const registerSubmitHandler=async(values,{setSubmitting})=>{
// setSubmitting(true)
// const response= await axios.post(`${BASE_URL}/auth/register`,values)
// console.log(response.data)
//   }
//   return (
//     <Formik
//       initialValues={RegisterDto}
//       onSubmit={registerSubmitHandler}
//     >
//       {({ isSubmitting, status }) => (
//         <Form>
//           <label>نام</label>
//           <Field name="firstName" placeholder="نام" />
//           <ErrorMessage name="firstName" component="div" className="error" />

//           <label>نام خانوادگی</label>
//           <Field name="lastName" placeholder="نام خانوادگی" />
//           <ErrorMessage name="lastName" component="div" className="error" />

//           <label>نام کاربری</label>
//           <Field name="username" placeholder="نام کاربری" />
//           <ErrorMessage name="username" component="div" className="error" />

//           <label>ایمیل</label>
//           <Field name="email" type="email" placeholder="ایمیل" />
//           <ErrorMessage name="email" component="div" className="error" />

//           <label>موبایل</label>
//           <Field name="mobile" placeholder="شماره موبایل" />
//           <ErrorMessage name="mobile" component="div" className="error" />

//           <label>رمز عبور</label>
//           <Field name="password" type="password" placeholder="رمز عبور" />
//           <ErrorMessage name="password" component="div" className="error" />

//           <button type="submit" disabled={isSubmitting}>
//             {isSubmitting ? 'در حال ثبت...' : 'ثبت‌نام'}
//           </button>

//         </Form>
//       )}
//     </Formik>
//   );
// }

// export default Register;
