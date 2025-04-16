import { RegisterDto } from '@/models/dto/UserDto';
import axios from 'axios';
import { Field, Form, Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup'; // اضافه کردن اعتبارسنجی
import { BASE_URL } from '../../../constants';
import SiteWrapper from '@/components/ui/theme/SiteWrapper';
import { Col, Container, Row } from 'react-bootstrap';
import { useRouter } from 'next/router'; // برای هدایت کاربر به صفحات دیگر
import { useDispatch } from 'react-redux'; // برای فراخوانی Redux
import Cookies from 'js-cookie'; // برای مدیریت کوکی‌ها
import { setUser } from '@/redux/auth/UserSlice'; // اکشن برای ذخیره کاربر در Redux

function Register() {
  const router = useRouter(); // استفاده از useRouter برای هدایت
  const dispatch = useDispatch(); // فراخوانی dispatch برای Redux

  // اعتبارسنجی فرم با استفاده از Yup
  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required('نام ضروری است'),
    lastName: Yup.string().required('نام خانوادگی ضروری است'),
    username: Yup.string().required('نام کاربری ضروری است'),
    email: Yup.string().email('ایمیل معتبر وارد کنید').required('ایمیل ضروری است'),
    mobile: Yup.string().matches(/^[0-9]{10,11}$/, 'شماره موبایل معتبر وارد کنید').required('شماره موبایل ضروری است'),
    password: Yup.string().required('رمز عبور ضروری است').min(6, 'رمز عبور باید حداقل 6 کاراکتر باشد'),
  });

  const registerSubmitHandler = async (values, { setSubmitting, setStatus }) => {
    setSubmitting(true);
    try {
      // درخواست ثبت‌نام
      const registerResponse = await axios.post(`${BASE_URL}/auth/register`, values);
      if (registerResponse.data.message === "ثبت‌نام با موفقیت انجام شد") {
        setStatus({ success: true });

        // درخواست ورود خودکار پس از ثبت‌نام
        const loginResponse = await axios.post(`${BASE_URL}/auth/login`, {
          username: values.username,
          password: values.password,
          rememberMe: false,
        });

        // ذخیره توکن و اطلاعات کاربر
        dispatch(setUser(loginResponse.data));
        Cookies.set('token', loginResponse.data.token, {
          path: '/',
          expires: 1,
          secure: false,
        });

        // هدایت به صفحه دسته‌بندی‌ها
        router.push('/');
      } else {
        setStatus({ success: false, error: registerResponse.data.message || 'خطا در ثبت‌نام' });
      }
    } catch (error) {
      setStatus({ success: false, error: error.response?.data?.message || 'خطا در ثبت‌نام' });
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
              initialValues={RegisterDto}
              validationSchema={validationSchema}
              onSubmit={registerSubmitHandler}
            >
              {({ isSubmitting, status }) => (
                <Form>
                  <div className="form-group">
                    <label htmlFor="firstName" className="mt-2">نام</label>
                    <Field className="form-control" name="firstName" placeholder="نام" />
                    <ErrorMessage name="firstName" component="div" className="error text-danger" />
                  </div>

                  <div className="form-group mt-3">
                    <label htmlFor="lastName" className="mt-2">نام خانوادگی</label>
                    <Field className="form-control" name="lastName" placeholder="نام خانوادگی" />
                    <ErrorMessage name="lastName" component="div" className="error text-danger" />
                  </div>

                  <div className="form-group mt-3">
                    <label htmlFor="username" className="mt-2">نام کاربری</label>
                    <Field className="form-control" name="username" placeholder="نام کاربری" />
                    <ErrorMessage name="username" component="div" className="error text-danger" />
                  </div>

                  <div className="form-group mt-3">
                    <label htmlFor="email" className="mt-2">ایمیل</label>
                    <Field className="form-control" name="email" type="email" placeholder="ایمیل" />
                    <ErrorMessage name="email" component="div" className="error text-danger" />
                  </div>

                  <div className="form-group mt-3">
                    <label htmlFor="mobile" className="mt-2">موبایل</label>
                    <Field className="form-control" name="mobile" placeholder="شماره موبایل" />
                    <ErrorMessage name="mobile" component="div" className="error text-danger" />
                  </div>

                  <div className="form-group mt-3">
                    <label htmlFor="password" className="mt-2">رمز عبور</label>
                    <Field className="form-control" name="password" type="password" placeholder="رمز عبور" />
                    <ErrorMessage name="password" component="div" className="error text-danger" />
                  </div>

                  <button type="submit" className="btn btn-primary mt-3" disabled={isSubmitting}>
                    {isSubmitting ? 'در حال ثبت...' : 'ثبت‌نام'}
                  </button>

                  {status?.error && (
                    <div className="alert alert-danger mt-3">
                      {status.error}
                    </div>
                  )}
                  {status?.success && (
                    <div className="alert alert-success mt-3">
                      ثبت‌نام با موفقیت انجام شد!
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

export default Register;
