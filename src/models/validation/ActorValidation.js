import * as Yup from 'yup';

export const CreateActorValidationSchema = Yup.object({
    firstname: Yup.string()
        .required('نام الزامی است')
        .max(50, 'حداکثر 50 کاراکتر وارد کنید'),
    lastname: Yup.string()
        .required('نام خانوادگی الزامی است')
        .max(50, 'حداکثر 50 کاراکتر وارد کنید'),
    gender: Yup.boolean(),
    nation: Yup.string()
        .max(100, 'حداکثر 100 کاراکتر وارد کنید')
        .required('ملیت الزامی است'),
});

export const UpdateActorValidationSchema = Yup.object({
    actorId: Yup.string().required('شناسه بازیگر الزامی است'),
    firstname: Yup.string()
        .required('نام الزامی است')
        .max(50, 'حداکثر 50 کاراکتر وارد کنید'),
    lastname: Yup.string()
        .required('نام خانوادگی الزامی است')
        .max(50, 'حداکثر 50 کاراکتر وارد کنید'),
    gender: Yup.boolean(),
    nation: Yup.string()
        .max(100, 'حداکثر 100 کاراکتر وارد کنید')
        .required('ملیت الزامی است'),
    actorImageUrl: Yup.string()
        .url('آدرس تصویر نامعتبر است')
        .max(2000, 'حداکثر 2000 کاراکتر وارد کنید'),
});


