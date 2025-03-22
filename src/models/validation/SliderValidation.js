import * as Yup from 'yup';

export const CreateSliderValidationSchema = Yup.object({
    sliderPersianTitle: Yup.string().required('*').max(100, 'حداکثر 100 کاراکتر وارد کنید'),
    sliderLatinTitle: Yup.string().max(100, 'حداکثر 100 کاراکتر وارد کنید'),
    saummary: Yup.string().max(500, 'حداکثر 500 کاراکتر وارد کنید'),
    description: Yup.string().max(500, 'حداکثر 500 کاراکتر وارد کنید'),
    pageUrl: Yup.string().url('لینک نامعتبر است').max(2000, 'حداکثر 2000 کاراکتر وارد کنید'),
    movies: Yup.array().of(
        Yup.object({
            movieId: Yup.string().required('*'),
        })
    ),
});

export const UpdateSliderValidationSchema = Yup.object({
    sliderId: Yup.string().required('*'),
    sliderPersianTitle: Yup.string().required('*').max(100, 'حداکثر 100 کاراکتر وارد کنید'),
    sliderLatinTitle: Yup.string().max(100, 'حداکثر 100 کاراکتر وارد کنید'),
    saummary: Yup.string().max(500, 'حداکثر 500 کاراکتر وارد کنید'),
    description: Yup.string().max(500, 'حداکثر 500 کاراکتر وارد کنید'),
    movies: Yup.array().of(
        Yup.object({
            movieId: Yup.string().required('*'),
        })
    ),
});
