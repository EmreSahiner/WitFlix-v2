import styled from "styled-components";
import Main from "../components/Main";
import Suggestion from "../components/Suggestion/Suggestion";
import TopList from "../components/TopList/TopList";
import { useReducer } from "react";
import { initialState, movieReducer } from "../store/reducers/movieReducer";

const Spacer = styled.div`
  height: 120px;
  background: black;
`;

export default function Browse() {
  const [state, dispatch] = useReducer(movieReducer, initialState);

  return (
    <>
      <Main />
      <Suggestion
        title="My List"
        showProgress={false}
        type="shows"
        movies={state.myList}
      />
      <Suggestion
        title="Continue Watching for Emre"
        showProgress={true}
        type="movies"
        movies={state.incompleted}
      />
      <Suggestion
        title="Continue Watching for Emre"
        showProgress={false}
        type="movies"
        movies={state.completed}
      />
      <Suggestion
        title="Time Travel Movies"
        showProgress={false}
        type="search"
        param="time"
      />
      <TopList />
      <Suggestion
        title="Thriller Shows"
        showProgress={false}
        type="search"
        param="thriller"
      />
      <Suggestion
        title="Because you Watched Breaking Bad"
        showProgress={false}
        type="search"
        param="breaking"
      />
      <Spacer />
    </>
  );
}
