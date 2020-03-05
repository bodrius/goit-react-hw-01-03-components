import React from "react";
import friends from "./friends.json";
import ItemsFriends from "./ItemsFriends";
import css from "./friends.module.css";

const FriendList = props => {
  return (
    <ul className={css.friend_list}>
      {friends.map(el => (
        <ItemsFriends items={el} key={el.id} />
      ))}
    </ul>
  );
};

export default FriendList;
