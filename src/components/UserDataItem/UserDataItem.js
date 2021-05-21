import "./UserDataItem.css";

const UserDataItem = (props) => {
    return(
        <li className="user-list-item">
            {props.children}
        </li>
    );
}

export default UserDataItem;