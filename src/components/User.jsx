import styled from "styled-components";

const Avatar = styled.img`
  width: 100%;
  border-radius: 0.5rem;
`;

const UserCard = styled.div`
  width: 150px;
`;

const Title = styled.h3`
  margin-top: 1rem;
`;

export default function User(props) {
  const { user } = props;
  const { name, avatar } = user;
  return (
    <UserCard className="user-card">
      <Avatar src={avatar} />
      <Title>{name}</Title>
    </UserCard>
  );
}
