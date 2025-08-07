import CenterSection from "../components/center/CenterSection";
import LeftSideBar from "../components/leftSideBar/LeftSideBar";

import RightSideBar from "../components/rightSideBar/RightSideBar";
import { useState } from "react";

function LandingPage() {
  const [activeSection, setActiveSection] = useState("home");

  return (
    <div className="flex h-screen overflow-hidden w-full">
      <LeftSideBar handleSection={setActiveSection} />
      <CenterSection
        activeSection={activeSection}
        handleSection={setActiveSection}
      />
      <RightSideBar />
    </div>
  );
}

export default LandingPage;
