import React from "react";
import FriendList from "./components/friendsList/FriendList";
import friends from "./components/friendsList/friends.json";

const App = () => {
  return <FriendList friends={friends} />;
};

export default App;
