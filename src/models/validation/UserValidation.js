import * as Yup from 'yup';

export const RegisterUserValidationSchema = Yup.object({
    firstName: Yup.string().required('*').max(100, 'حداکثر 100 کاراکتر وارد کنید'),
    lastName: Yup.string().required('*').max(100, 'حداکثر 100 کاراکتر وارد کنید'),
    mobile: Yup.string().matches(/^\d{10,15}$/, 'شماره موبایل نامعتبر است').required('*'),
    email: Yup.string().email('ایمیل نامعتبر است').required('*'),
    password: Yup.string().min(8, 'حداقل 8 کاراکتر وارد کنید').required('*'),
    role: Yup.string().required('*'),
});

export const LoginUserValidationSchema = Yup.object({
    mobile: Yup.string().matches(/^\d{10,15}$/, 'شماره موبایل نامعتبر است').required('*'),
    email: Yup.string().email('ایمیل نامعتبر است').required('*'),
    password: Yup.string().min(8, 'حداقل 8 کاراکتر وارد کنید').required('*'),
});
