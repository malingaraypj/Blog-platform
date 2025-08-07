import { useState } from "react";

function UserOptions() {
  const [activeTab, setActiveTab] = useState("posts");

  const baseClass = "px-4 py-2 cursor-pointer font-semibold";
  const activeClass = "text-blue-600 border-b-2 border-blue-600";

  return (
    <div className="w-full">
      {/* Tab Buttons */}
      <div className="flex gap-6 border-b py-2">
        <button
          className={`${baseClass} ${activeTab === "posts" ? activeClass : ""}`}
          onClick={() => setActiveTab("posts")}
        >
          Posts
        </button>
        <button
          className={`${baseClass} ${
            activeTab === "replies" ? activeClass : ""
          }`}
          onClick={() => setActiveTab("replies")}
        >
          Replies
        </button>
        <button
          className={`${baseClass} ${activeTab === "likes" ? activeClass : ""}`}
          onClick={() => setActiveTab("likes")}
        >
          Likes
        </button>
        <button
          className={`${baseClass} ${
            activeTab === "follow" ? activeClass : ""
          }`}
          onClick={() => setActiveTab("follow")}
        >
          Follow Recommendation
        </button>
      </div>

      {/* Tab Content */}
      <div className="mt-4">
        {activeTab === "posts" && (
          <div>
            Posts Content Here Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Eveniet cum adipisci nihil autem magni corporis,
            perferendis quos ea numquam tempora laboriosam asperiores nobis
            veritatis delectus mollitia neque officia excepturi cupiditate velit
            ipsa.
          </div>
        )}
        {activeTab === "replies" && <div>Replies Content Here</div>}
        {activeTab === "likes" && <div>Replies Content Here</div>}
        {activeTab === "follow" && <div>Replies Content Here</div>}
      </div>
    </div>
  );
}

export default UserOptions;
