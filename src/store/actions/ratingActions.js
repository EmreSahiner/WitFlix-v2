export const RATE_MOVIE = "RATE_MOVIE";

export const rateMovie = (rate, movie) => {
  return {
    type: RATE_MOVIE,
    payload: { ...movie, rate: rate },
  };
};
