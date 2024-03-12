import { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import TopMovieItem from "./TopMovieItem";

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

export default function TopList() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get("https://movies-api14.p.rapidapi.com/shows", {
        headers: {
          "X-RapidAPI-Key":
            "0625ba710bmshcbdc8ee7a6cb685p1bb693jsnaf9636b5f3bb",
          "X-RapidAPI-Host": "movies-api14.p.rapidapi.com",
        },
      })
      .then((response) => {
        setMovies(response.data.movies);
      });
  }, []);
  return (
    <Section>
      <h2>Top Movies in Turkey</h2>
      <MovieContainer>
        {movies.slice(0, 6).map((item, index) => {
          return <TopMovieItem key={index} movie={item} index={index + 1} />;
        })}
      </MovieContainer>
    </Section>
  );
}
