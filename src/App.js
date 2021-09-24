import user from "./social-profile/user.json";
import Profile from "./components/Profile/Profile";
import statisticalData from "../src/statistics/statistical-data.json";
import Statistics from "./components/Statistics/Statistics.js";
import friends from "./friend-list/friends.json";
import FriendList from "./components/FriendList/FriendList";
import transactions from "../src/transaction-history/transactions.json";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";
import "./App.css";

function App() {
  return (
    <>
      <Profile
        avatar={user.avatar}
        name={user.name}
        tag={user.tag}
        location={user.location}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <Statistics title="Upload Stats" stats={statisticalData} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />;
    </>
  );
}
export default App;
