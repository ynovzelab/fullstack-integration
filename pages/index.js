import SearchBar from "../components/dashboard/SearchBar";
import WelcomeMessage from "../components/dashboard/WelcomeMessage";
export default function Home() {
  return (
    <div className="dashboard__home">
      <SearchBar />
      <div className="dashboard__header">
        <WelcomeMessage user="Vincent"/>
      </div>
    </div>
  )
}
