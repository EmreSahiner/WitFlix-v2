import { useHistory } from "react-router-dom";
import styled from "styled-components";

const Avatar = styled.img`
  width: 100%;
  border-radius: 0.5rem;
`;

const UserCard = styled.div`
  width: 150px;
  cursor: pointer;
`;

const Title = styled.h3`
  margin-top: 1rem;
`;

export default function User(props) {
  const { user } = props;
  const { name, avatar } = user;
  const history = useHistory();

  const handleClick = () => {
    history.push("/browse");
  };
  return (
    <UserCard className="user-card" onClick={handleClick}>
      <Avatar src={avatar} />
      <Title>{name}</Title>
    </UserCard>
  );
}
