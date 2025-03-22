export const CreateBoxDto={
    boxPersianTitle:'',
    boxLatinTitle:'',
    description:'',
    position:0,
    categoryId:'',
    movies:[
        {}
    ]
}
export const UpdateBoxDto={
    boxId:'',
    boxPersianTitle:'',
    boxLatinTitle:'',
    description:'',
    position:'',
    pageUrl:'',
}
export const SearchBoxDto={
    boxId:'',
    boxPersianTitle:'',
    page:1,
    limit:20
}