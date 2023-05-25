import axios from 'axios';


const options = {
  headers: {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNDNkNGU2ZDlkMmY0NDI1YzZiYmJmZWNiYTY1MWY2MSIsInN1YiI6IjY0Njc1NmUzMmJjZjY3MDBmZTVmOThlYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gUmroiBjrR55fTMOpWraCXInjOEqeXnhAyLBBoAC2XU',
  },
};

export async function getTrendingMovies() {
  try {
    const data = await axios.get(
      'https://api.themoviedb.org/3/trending/movie/day?language=en-US',
      options
    );
    return data.data.results;
  } catch (error) {
    console.log(error);
  }
}

export async function getMoviesDetails(id) {
  try {
    const data = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
      options
    );
    return data.data;
  } catch (error) {
    console.log(error);
  }
}

export async function getCast(id) {
  try {
    const data = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`,
      options
    );
    return data.data.cast;
  } catch (error) {
    console.log(error);
  }
}
export async function getReview(id) {
  try {
    const data = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/reviews?language=en-US`,
      options
    );
    return data.data.results;
  } catch (error) {
    console.log(error);
  }
}

export async function getMovies(searchMovie) {
  try {
    const data = await axios.get(
      `https://api.themoviedb.org/3/search/movie?query=${searchMovie}&include_adult=false&language=en-US&page=1`,
      options
    );
    return data.data.results;
  } catch (error) {
    console.log(error);
  }
}
