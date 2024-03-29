import { useEffect, useReducer, useState } from "react";
import Movie from "./Movie";
import styled from "styled-components";
import axios from "axios";
import { initialState, movieReducer } from "../../store/reducers/movieReducer";
import { addMyList } from "../../store/actions/movieActions";
import { useSelector } from "react-redux";

const Section = styled.section`
  padding: 1rem 2rem;
  background: black;
  &:nth-child(2) {
    margin-top: -100px;
  }
`;

const MovieContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2rem;
`;

export default function Suggestion(props) {
  const [state, dispatch] = useReducer(movieReducer, initialState);

  const [movies, setMovies] = useState([]);
  const { title, showProgress, type, param } = props;
  const incompletedMovies = useSelector((store) => store.movie.incompleted);

  const handleAddToMyList = (movie) => {
    dispatch(addMyList(movie));
  };

  useEffect(() => {
    axios
      .get("https://movies-api14.p.rapidapi.com/" + type, {
        params: param && { query: param },
        headers: {
          "X-RapidAPI-Key":
            "0625ba710bmshcbdc8ee7a6cb685p1bb693jsnaf9636b5f3bb",
          "X-RapidAPI-Host": "movies-api14.p.rapidapi.com",
        },
      })
      .then((response) => {
        console.log(response.data);

        if (param) {
          setMovies(response.data.contents);
        } else {
          setMovies(response.data.movies);
        }
      });
  }, [title, param, type]);
  return (
    <Section>
      <h2>{title}</h2>
      <MovieContainer>
        {movies.slice(0, 7).map((item, index) => {
          return (
            <Movie
              key={index}
              movie={item}
              showProgress={showProgress}
              onClick={handleAddToMyList}
            />
          );
        })}
      </MovieContainer>
    </Section>
  );
}
