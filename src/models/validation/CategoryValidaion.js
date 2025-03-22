import * as YUP  from 'yup'

export const CreateCategoryValidationSchema = YUP.object({
    categoryPersianName: YUP.string().required('*').max(100,'حداکثر 100 کاراکتر وارد کنید'),
    categoryLatinName: YUP.string().max(100,'حداکثر 100 کاراکتر وارد کنید'),
    description: YUP.string().max(500,'حداکثر 500 کاراکتر وارد کنید'),
    summary: YUP.string().max(500,'حداکثر 500 کاراکتر وارد کنید'),
    categoryImageUrl: YUP.string().max(2000,'حداکثر 2000 کاراکتر وارد کنید'),
})

export const UpdateCategoryValidationSchema = YUP.object({
    categoryId:YUP.string().required('*'),
    categoryPersianName: YUP.string().required('*').max(100,'حداکثر 100 کاراکتر وارد کنید'),
    categoryLatinName: YUP.string().max(100,'حداکثر 100 کاراکتر وارد کنید'),
    description: YUP.string().max(500,'حداکثر 500 کاراکتر وارد کنید'),
    summary: YUP.string().max(500,'حداکثر 500 کاراکتر وارد کنید'),
    categoryImageUrl: YUP.string().max(2000,'حداکثر 2000 کاراکتر وارد کنید'),
})