import * as Yup from 'yup';

export const CreateMovieValidationSchema = Yup.object({
    moviePersianTitle: Yup.string().required('*').max(100, 'حداکثر 100 کاراکتر وارد کنید'),
    movieLatinTitle: Yup.string().max(100, 'حداکثر 100 کاراکتر وارد کنید'),
    description: Yup.string().max(500, 'حداکثر 500 کاراکتر وارد کنید'),
    summary: Yup.string().max(500, 'حداکثر 500 کاراکتر وارد کنید'),
    movieCoverImageUrl: Yup.string().url('لینک نامعتبر است').max(2000, 'حداکثر 2000 کاراکتر وارد کنید'),
    duration: Yup.string().max(10, 'حداکثر 10 کاراکتر وارد کنید'),
    country: Yup.string().max(100, 'حداکثر 100 کاراکتر وارد کنید'),
    minAge: Yup.number().min(0, 'باید عدد مثبت باشد').required('*'),
    movieTrailerVideoUrl: Yup.string().url('لینک نامعتبر است').max(2000, 'حداکثر 2000 کاراکتر وارد کنید'),
    movieVideoUrl: Yup.string().url('لینک نامعتبر است').max(2000, 'حداکثر 2000 کاراکتر وارد کنید'),
    isFree: Yup.boolean().required('*'),
    categoryId: Yup.string().required('*'),
    genreId: Yup.string().required('*'),
    directorId: Yup.string().required('*'),
    actors: Yup.array().of(
        Yup.object({
            movieId: Yup.string().required('*'),
        })
    ),
});

export const UpdateMovieValidationSchema = Yup.object({
    movieId: Yup.string().required('*'),
    moviePersianTitle: Yup.string().required('*').max(100, 'حداکثر 100 کاراکتر وارد کنید'),
    movieLatinTitle: Yup.string().max(100, 'حداکثر 100 کاراکتر وارد کنید'),
    description: Yup.string().max(500, 'حداکثر 500 کاراکتر وارد کنید'),
    summary: Yup.string().max(500, 'حداکثر 500 کاراکتر وارد کنید'),
    movieCoverImageUrl: Yup.string().url('لینک نامعتبر است').max(2000, 'حداکثر 2000 کاراکتر وارد کنید'),
    duration: Yup.string().max(10, 'حداکثر 10 کاراکتر وارد کنید'),
    country: Yup.string().max(100, 'حداکثر 100 کاراکتر وارد کنید'),
    minAge: Yup.number().min(0, 'باید عدد مثبت باشد').required('*'),
    movieTrailerVideoUrl: Yup.string().url('لینک نامعتبر است').max(2000, 'حداکثر 2000 کاراکتر وارد کنید'),
    movieVideoUrl: Yup.string().url('لینک نامعتبر است').max(2000, 'حداکثر 2000 کاراکتر وارد کنید'),
    isFree: Yup.boolean().required('*'),
    categoryId: Yup.string().required('*'),
    genreId: Yup.string().required('*'),
    directorId: Yup.string().required('*'),
    actors: Yup.array().of(
        Yup.object({
            movieId: Yup.string().required('*'),
        })
    ),
});
