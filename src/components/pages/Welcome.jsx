import styled from "styled-components";
import User from "../User";

const UserList = styled.div`
  display: flex;
  gap: 2.5rem;
  justify-content: center;
  color: gray;
`;

const Button = styled.button`
  padding: 0.7rem 3rem;
  border: 1px solid gray;
  border-radius: 0;
  color: gray;
  background-color: inherit;
  font-size: 1.17em;
  margin-top: 3rem;
`;

export default function Welcome(props) {
  const { users } = props;

  return (
    <div className="user-section">
      <h1>Who's watching?</h1>
      <UserList>
        {users.map((user, index) => {
          return <User user={user} key={index} />;
        })}
      </UserList>
      <Button>Manage Profiles</Button>
    </div>
  );
}
