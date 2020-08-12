import React from 'react';
// import friends from '../../data/friends.json';
import styles from './FriendList.module.css';

function FriendList({ friends }) {
  return (
    <>
      <ul className={styles.friendList}>
        {friends.map(friend => (
          <li key={friend.id} className={styles.item}>
            <span
              className={
                friend.isOnline
                  ? [styles.status, styles.isOnline].join(' ')
                  : [styles.status, styles.isOffline].join(' ')
              }
            ></span>
            <img
              className={styles.avatar}
              src={friend.avatar}
              alt={friend.name}
              width="48"
            />
            <p className={styles.name}>{friend.name}</p>
          </li>
        ))}
      </ul>
    </>
  );
}

export default FriendList;
