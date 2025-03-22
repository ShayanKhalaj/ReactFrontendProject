export const CreateCategoryDto = {
  categoryPersianName: "",
  categoryLatinName: "",
  description: "",
  summary: "",
  categoryImageUrl: "",
};

export const UpdateCategoryDto = {
  categoryId: "",
  categoryPersianName: "",
  categoryLatinName: "",
  description: "",
  summary: "",
  categoryImageUrl: "",
};

export const SearchCategoryDto = {
  categoryId: "",
  categoryPersianName: "",
  page: 1,
  limit: 10,
};
