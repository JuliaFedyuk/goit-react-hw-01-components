import styles from "./FriendsList.module.css";
import PropTypes from "prop-types";

const FriendsList = ({ friends }) => (
  <ul className={styles.friendList}>
    {friends.map(({ avatar, name, isOnline }) => (
      <li key={name} className={styles.item}>
        <span
          className={styles.status}
          style={{ color: isOnline ? "green" : "red" }}
        >
          *
        </span>
        <img className={styles.avatar} src={avatar} alt="" width="48" />
        <p className={styles.name}>{name}</p>
      </li>
    ))}
  </ul>
);

FriendsList.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};

export default FriendsList;
