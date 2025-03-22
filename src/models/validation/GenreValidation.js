import * as Yup from 'yup';

export const CreateGenreValidationSchema = Yup.object({
    genrePersianName: Yup.string().required('*').max(100, 'حداکثر 100 کاراکتر وارد کنید'),
    genreLatinName: Yup.string().max(100, 'حداکثر 100 کاراکتر وارد کنید'),
    description: Yup.string().max(500, 'حداکثر 500 کاراکتر وارد کنید'),
    summary: Yup.string().max(500, 'حداکثر 500 کاراکتر وارد کنید'),
    genreCoverImageUrl: Yup.string().url('لینک نامعتبر است').max(2000, 'حداکثر 2000 کاراکتر وارد کنید'),
});

export const UpdateGenreValidationSchema = Yup.object({
    genreId: Yup.string().required('*'),
    genrePersianName: Yup.string().required('*').max(100, 'حداکثر 100 کاراکتر وارد کنید'),
    genreLatinName: Yup.string().max(100, 'حداکثر 100 کاراکتر وارد کنید'),
    description: Yup.string().max(500, 'حداکثر 500 کاراکتر وارد کنید'),
    summary: Yup.string().max(500, 'حداکثر 500 کاراکتر وارد کنید'),
    genreCoverImageUrl: Yup.string().url('لینک نامعتبر است').max(2000, 'حداکثر 2000 کاراکتر وارد کنید'),
});
