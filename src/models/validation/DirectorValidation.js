import * as Yup from 'yup';

export const CreateDirectorValidationSchema = Yup.object({
    firstname: Yup.string().required('*').max(100, 'حداکثر 100 کاراکتر وارد کنید'),
    lastname: Yup.string().required('*').max(100, 'حداکثر 100 کاراکتر وارد کنید'),
    gender: Yup.boolean().required('*'),
    nation: Yup.string().max(100, 'حداکثر 100 کاراکتر وارد کنید'),
    directorImageUrl: Yup.string().url('لینک نامعتبر است').max(2000, 'حداکثر 2000 کاراکتر وارد کنید'),
});

export const UpdateDirectorValidationSchema = Yup.object({
    directorId: Yup.string().required('*'),
    firstname: Yup.string().required('*').max(100, 'حداکثر 100 کاراکتر وارد کنید'),
    lastname: Yup.string().required('*').max(100, 'حداکثر 100 کاراکتر وارد کنید'),
    gender: Yup.boolean().required('*'),
    nation: Yup.string().max(100, 'حداکثر 100 کاراکتر وارد کنید'),
    directorImageUrl: Yup.string().url('لینک نامعتبر است').max(2000, 'حداکثر 2000 کاراکتر وارد کنید'),
});
