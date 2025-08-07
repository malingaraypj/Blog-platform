import UserProfile from "../profile/UserProfile";
import Home from "./Home";

function CenterSection({ activeSection }) {
  return (
    <div className="w-[50%] ml-[25%] overflow-y-auto scrollbar-hide h-screen">
      {activeSection === "home" && <Home />}
      {activeSection === "explore" && <div>Explore</div>}
      {activeSection === "notification" && <div>Notification</div>}
      {activeSection === "messages" && <div>Messages</div>}
      {activeSection === "communities" && <div>Communities</div>}
      {activeSection === "profile" && <UserProfile />}
      {activeSection === "more" && <div>More</div>}
    </div>
  );
}

export default CenterSection;
