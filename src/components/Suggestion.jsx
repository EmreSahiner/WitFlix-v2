import { useEffect, useState } from "react";
import Movie from "./Movie";
import styled from "styled-components";
import axios from "axios";

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
  const [movies, setMovies] = useState([]);
  const { title, showProgress, type, param } = props;

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
  }, [title]);
  return (
    <Section>
      <h2>{title}</h2>
      <MovieContainer>
        {movies.slice(0, 7).map((item, index) => {
          return <Movie key={index} movie={item} showProgress={showProgress} />;
        })}
      </MovieContainer>
    </Section>
  );
}
