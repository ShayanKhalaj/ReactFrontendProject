// import axios from 'axios';
// import { Field, Form, Formik, ErrorMessage } from 'formik';
// import { BASE_URL } from '../../../constants';
// import { LoginDto } from '@/models/dto/UserDto';
// import Cookies from 'js-cookie';
// import { setUser } from '@/redux/auth/AdminSlice';
// import { useDispatch } from 'react-redux';


// function Login() {

//   const dispatch = useDispatch()

//   const loginSubmitHandler = async(values,{setSubmitting})=>{
//     setSubmitting(true)
//     const response = await axios.post(`${BASE_URL}/auth/login`,values)
//    dispatch(setUser(response.data))
//    Cookies.set('token',response.data.token,{path:'/',expires:1,
//     secure:false
//    })
//   }

//   return (
//     <Formik
//       initialValues={LoginDto}
//       onSubmit={loginSubmitHandler}
//     >
//       {({ isSubmitting, status }) => (
//         <Form>
//           <label>نام کاربری</label>
//           <Field name="username" placeholder="نام کاربری" />
//           <ErrorMessage name="username" component="div" className="error" />

//           <label>رمز عبور</label>
//           <Field name="password" type="password" placeholder="رمز عبور" />
//           <ErrorMessage name="password" component="div" className="error" />

//           <label>
//             <Field type="checkbox" name="rememberMe" />
//             مرا به خاطر بسپار
//           </label>

//           <button type="submit" disabled={isSubmitting}>
//             {isSubmitting ? 'در حال ورود...' : 'ورود'}
//           </button>

//         </Form>
//       )}
//     </Formik>
//   );
// }

// export default Login;
