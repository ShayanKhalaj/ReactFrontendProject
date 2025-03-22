import * as Yup from 'yup';

export const CreateBoxValidationSchema = Yup.object({
    boxPersianTitle: Yup.string().required('*').max(100, 'حداکثر 100 کاراکتر وارد کنید'),
    boxLatinTitle: Yup.string().max(100, 'حداکثر 100 کاراکتر وارد کنید'),
    description: Yup.string().max(500, 'حداکثر 500 کاراکتر وارد کنید'),
    position: Yup.string().required('*'),
    pageUrl: Yup.string().url('لینک نامعتبر است').max(2000, 'حداکثر 2000 کاراکتر وارد کنید'),
});

export const UpdateBoxValidationSchema = Yup.object({
    boxId: Yup.string().required('*'),
    boxPersianTitle: Yup.string().required('*').max(100, 'حداکثر 100 کاراکتر وارد کنید'),
    boxLatinTitle: Yup.string().max(100, 'حداکثر 100 کاراکتر وارد کنید'),
    description: Yup.string().max(500, 'حداکثر 500 کاراکتر وارد کنید'),
    position: Yup.string().required('*'),
    pageUrl: Yup.string().url('لینک نامعتبر است').max(2000, 'حداکثر 2000 کاراکتر وارد کنید'),
});
