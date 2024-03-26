import { useDispatch } from "react-redux";
import styled from "styled-components";
import { addIncompleted } from "../../store/actions/movieActions";

const Bar = styled.progress`
  color: red;
  background-color: gray;
  height: 5px;
  display: block;
  margin: 1rem auto;
  width: 80%;

  &::-moz-progress-bar {
    background: red;
  }
  &::-webkit-progress-value {
    background: red;
  }
`;
const Card = styled.div`
  display: 15%;
`;

const Poster = styled.img`
  width: 100%;
  display: block;
  aspect-ratio: 2/3;
  max-width: 300px;
  object-fit: cover;
`;

export default function Movie(props) {
  const { showProgress, movie } = props;
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(addIncompleted(movie));
  };

  return (
    <Card onClick={handleClick}>
      <Poster src={movie.poster_path} />
      {showProgress && (
        <Bar id="file" value={Math.ceil(Math.random() * 100)} max="100" />
      )}
    </Card>
  );
}
