import React from "react";
import PropTypes from "prop-types";
import Friend from "./Friend";
import styles from "./FriendsList.module.css";

const FriendsList = ({ friends }) => (
  <ul className={styles.friendList}>
    {friends.map(({ avatar, name, isOnline }) => (
      <Friend avatar={avatar} name={name} status={isOnline} />
    ))}
  </ul>
);

FriendsList.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};

export default FriendsList;

// class FriendsList extends React.Component {
//   render() {
//     const friends = this.props;
//     return (
//       <ul className={styles.friendList}>
//         {friends.map(({ avatar, name, isOnline }) => (
//           <li key={name} className={styles.item}>
//             <span
//               className={styles.status}
//               style={{ color: isOnline ? "green" : "red" }}
//             >
//               *
//             </span>
//             <img className={styles.avatar} src={avatar} alt="" width="48" />
//             <p className={styles.name}>{name}</p>
//           </li>
//         ))}
//       </ul>
//     );
//   }
// }
