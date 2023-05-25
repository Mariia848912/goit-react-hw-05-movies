export const getGenres = arrayGenres => {
  return arrayGenres.map(genre => genre.name).join(' ');
};
