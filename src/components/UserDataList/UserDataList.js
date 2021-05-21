import "./UserDataList.css";
import UserDataItem from "../UserDataItem/UserDataItem";

const UserDataList = (props) => {
  return (
    <ul className="user-list">
      {props.users.map((user) => (
        <UserDataItem key={user.id}>
          {user.userName} ({user.userAge} years old)
        </UserDataItem>
      ))}
    </ul>
  );
};

export default UserDataList;
