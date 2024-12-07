import "./App.css";
import Profile from "./components/profile/profile";
import FriendList from "./components/friendList/friendList";
import TransactionHistory from "./components/transactionHistory/transactionHistory";

import transactions from "./transactions.json";
import userData from "./userData.json";
import friends from "./friends.json";

const App = () => {
  return (
    <div>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};

export default App;
