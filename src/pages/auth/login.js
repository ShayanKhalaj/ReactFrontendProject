import axios from 'axios';
import { Field, Form, Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup'; // اضافه کردن اعتبارسنجی
import { BASE_URL } from '../../../constants';
import { LoginDto } from '@/models/dto/UserDto';
import Cookies from 'js-cookie';
import { setUser } from '@/redux/auth/UserSlice';
import { useDispatch } from 'react-redux';
import { Col, Container, Row } from 'react-bootstrap';
import SiteWrapper from '@/components/ui/theme/SiteWrapper';
import { useRouter } from 'next/router';

function Login() {
  const dispatch = useDispatch();
  const router = useRouter()

  // اعتبارسنجی فرم با Yup
  const validationSchema = Yup.object().shape({
    username: Yup.string().required('نام کاربری ضروری است'),
    password: Yup.string().required('رمز عبور ضروری است'),
  });

  const loginSubmitHandler = async (values, { setSubmitting, setStatus }) => {
    setSubmitting(true);
    try {
      const response = await axios.post(`${BASE_URL}/auth/login`, values);
      // ذخیره اطلاعات کاربر در Redux
      dispatch(setUser(response.data));
      // ذخیره توکن در کوکی
      Cookies.set('token', response.data.token, {
        path: '/',
        expires: 1,
        secure: false,
      });

      setStatus({ success: true });

      if(response.data.role==="admin"){
        router.push("/pannel/categories")
      }
      else{
           router.push("/")

      }

    } catch (error) {
      console.error('Login Error:', error);
      setStatus({ success: false, error: error.response?.data?.message || 'خطا در ورود' });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <SiteWrapper>
      <Container className="text-light">
        <Row className="justify-content-center align-items-center" style={{ marginTop: '200px' }}>
          <Col md={6}>
            <Formik
              initialValues={LoginDto}
              validationSchema={validationSchema}
              onSubmit={loginSubmitHandler}
            >
              {({ isSubmitting, status }) => (
                <Form>
                  <div className="form-group ">
                    <label htmlFor="username" className="mt-2">نام کاربری</label>
                    <Field
                      className="form-control"
                      name="username"
                      placeholder="نام کاربری"
                    />
                    <ErrorMessage name="username" component="div" className="error text-danger" />
                  </div>

                  <div className="form-group mt-3">
                    <label htmlFor="password" className="mt-2">رمز عبور</label>
                    <Field
                      className="form-control"
                      name="password"
                      type="password"
                      placeholder="رمز عبور"
                    />
                    <ErrorMessage name="password" component="div" className="error text-danger" />
                  </div>

                  <div className="form-group mt-3">
                    <label htmlFor="rememberMe" className="mt-2">
                      <Field type="checkbox" name="rememberMe" />
                      مرا به خاطر بسپار
                    </label>
                  </div>

                  <button type="submit" className="btn btn-primary mt-3" disabled={isSubmitting}>
                    {isSubmitting ? 'در حال ورود...' : 'ورود'}
                  </button>

                  {status?.error && (
                    <div className="alert alert-danger mt-3">
                      {status.error}
                    </div>
                  )}
                  {status?.success && (
                    <div className="alert alert-success mt-3">
                      ورود با موفقیت انجام شد!
                    </div>
                  )}
                </Form>
              )}
            </Formik>
          </Col>
        </Row>
      </Container>
    </SiteWrapper>
  );
}

export default Login;
