import styled from "styled-components";
import Main from "../components/Main";
import Suggestion from "../components/Suggestion/Suggestion";
import TopList from "../components/TopList/TopList";

const Spacer = styled.div`
  height: 120px;
  background: black;
`;

export default function Browse() {
  return (
    <>
      <Main />
      <Suggestion title="My List" showProgress={false} type="shows" />
      <Suggestion
        title="Continue Watching for Emre"
        showProgress={true}
        type="movies"
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
