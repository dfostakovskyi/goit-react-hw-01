import PropTypes from "prop-types";
import styles from "./friendList.module.css";

const FriendList = ({ friends }) => {
  return (
    <ul className={styles.friendList}>
      {friends.map((friend) => (
        <li key={friend.id} className={styles.friendListItem}>
          <img
            src={friend.avatar}
            alt="User avatar"
            className={styles.avatar}
          />
          <p>{friend.name}</p>
          <p
            className={`${styles.status} ${
              friend.isOnline ? styles.online : styles.offline
            }`}
          >
            {friend.isOnline ? "Online" : "Offline"}
          </p>
        </li>
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ).isRequired,
};

export default FriendList;
