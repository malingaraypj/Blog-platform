import LeftSideBar from "../components/leftSideBar/LeftSideBar";
import CenterSection from "../components/center/CenterSection";
import RightSideBar from "../components/rightSideBar/RightSideBar";
import { useState } from "react";

function Home() {
    const [activeSection, setActiveSection] = useState('home');

    return <div className="flex">
        <LeftSideBar handleSection={setActiveSection} />
        {activeSection === 'home' && <CenterSection />}
        {activeSection === 'explore' && <div>Explore</div>}
        {activeSection === 'notification' && <div>Notification</div>}
        {activeSection === 'messages' && <div>Messages</div>}
        {activeSection === 'communities' && <div>Communities</div>}
        {activeSection === 'profile' && <div>Profile</div>}
        {activeSection === 'more' && <div>More</div>}
        <RightSideBar/>
    </div>
}

export default Home;