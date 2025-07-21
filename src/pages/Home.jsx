import LeftSideBar from "./../components/LeftSideBar";
import CenterSection from "../components/CenterSection";
import RightSideBar from "../components/RightSideBar";

function Home() {
    return <div className="flex">
        <LeftSideBar />
        <CenterSection />
        <RightSideBar/>
    </div>
}

export default Home;