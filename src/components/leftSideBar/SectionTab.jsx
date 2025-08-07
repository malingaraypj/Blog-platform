import { useState } from "react";
import Modal from "../../utils/modal";
import NewPost from "../center/NewPost";
import TabOption from "./TabOption";

function SectionTab() {
  const [openedModal, setopenedModal] = useState("");
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
        <button
          onClick={() => setopenedModal("new-post")}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-full w-[80%] text-lg transition-colors h-12 cursor-pointer"
        >
          Post
        </button>
      </div>
      {/* open the newpost modal */}
      <Modal open={openedModal === "new-post"}>
        <NewPost />
      </Modal>
    </>
  );
}

export default SectionTab;
