import styled from "styled-components";

const Card = styled.div`
  display: 15%;
`;

const Poster = styled.img`
  width: 122px;
  display: inline-block;
  aspect-ratio: 2/3;
  margin-left: -35px;
  object-fit: cover;
`;

const Index = styled.span`
  display: inline-block;
  font-weight: bold;
  font-size: 16rem;
  color: gray;
  -webkit-text-stroke: 3px #fff;
  line-height: 70%;
`;

export default function TopMovieItem(props) {
  const { movie, index } = props;
  return (
    <Card>
      <Index>{index}</Index>
      <Poster src={movie.poster_path} />
    </Card>
  );
}
