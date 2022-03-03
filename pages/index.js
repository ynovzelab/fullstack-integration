import SearchBar from "../components/dashboard/SearchBar";
import WelcomeMessage from "../components/dashboard/WelcomeMessage";
import DashBoardCard from "../components/dashboard/DashBoardCard";
import StatsRounded from "../components/dashboard/StatsRounded";
export default function Home() {
  return (
    <div className="dashboard__home">
      <SearchBar />
      <div className="dashboard__header">
        <WelcomeMessage user="Vincent" />
        <DashBoardCard color="grey">
          <StatsRounded/>
        </DashBoardCard>
        <DashBoardCard >
        
        </DashBoardCard>
        <DashBoardCard color="lightblue">
          <p>Test</p>
        </DashBoardCard>
      </div>
    </div>
  )
}
