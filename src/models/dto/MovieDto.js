export const CreateMovieDto = {
  moviePersianTitle: "",
  movieLatinTitle: "",
  description: "",
  summary: "",
  movieCoverImageUrl: "",
  duratoin: "",
  country: "",
  minAge: 0,
  movieTrailerVideoUrl: "",
  movieVideoUrl: "",
  isFree: true,
  categoryId: "",
  genreId: "",
  directorId: "",
};

export const CreateActorMovieDto={
  actorId:'',
movieId:'',
}

export const UpdateMovieDto = {
  movieId: "",
  moviePersianTitle: "",
  movieLatinTitle: "",
  description: "",
  summary: "",
  movieCoverImageUrl: "",
  duratoin: "",
  country: "",
  minAge: 0,
  movieTrailerVideoUrl: "",
  movieVideoUrl: "",
  isFree: false,
  categoryId: "",
  genreId: "",
  directorId: "",
  actors: [{ actorId: "" }],
};
export const SearchMovieDto = {
  movieId: "",
  moviePersianTitle: "",
};
