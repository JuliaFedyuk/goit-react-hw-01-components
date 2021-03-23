import PropTypes from "prop-types";
import styles from "./FriendsList.module.css";

const Friend = ({ avatar, name, isOnline }) => (
  <div className={styles.item}>
    <span
      className={styles.status}
      style={{ color: isOnline ? "green" : "red" }}
    >
      *
    </span>
    <img className={styles.avatar} src={avatar} alt="" width="48" />
    <p className={styles.name}>{name}</p>
  </div>
);

Friend.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};

export default Friend;
