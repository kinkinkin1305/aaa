import { PrimaryButton } from "./components/atoms/button/PrimaryButton";
import { SecondryButton } from "./components/atoms/button/SecondaryButton";
import { SearchInput } from "./components/atoms/molecules/Searchinput";
import { UserCard } from "./components/organisms/user/UserCard";
import "./styles.css";

const user = {
  name: "name",
  image: "https://source.unsplash.com/75715CVEJhI",
  email: "111info222.com",
  phone: "000-1111-2222",
  company: {
    name: "company"
  },
  website: "https://gogole.com"
};

export default function App() {
  return (
    <div className="App">
      <PrimaryButton>test</PrimaryButton>
      <SecondryButton>search</SecondryButton>
      <br />
      <SearchInput />
      <UserCard user={user} />
    </div>
  );
}
