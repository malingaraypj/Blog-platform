import Modal from "../../utils/modal";
import NewPost from "../center/NewPost";
import NewPostModal from "../center/NewPostModal";
import TabOption from "./TabOption";

function SectionTab() {
  return (
    <>
      <div className="w-full flex flex-col justify-between items-center">
        {/* Tabs */}
        <div className="flex flex-col gap-3 w-[50%] items-center justify-between py-3">
          <TabOption Iconlabel="home" />
          <TabOption Iconlabel="explore" />
          <TabOption Iconlabel="notification" />
          <TabOption Iconlabel="messages" />
          <TabOption Iconlabel="profile" />
          <TabOption Iconlabel="more" />
        </div>

        {/* Post Button */}
        <NewPostModal />
      </div>
    </>
  );
}

export default SectionTab;
