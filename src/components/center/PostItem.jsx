import PostUserProfile from "./PostUserProfile";
import dummyImg from "../../assets/image.png";
import PostReactionOption from "./PostReactionOption";

function PostItem() {
    return <div className=" bg-gray-900 rounded-xl p-3 m-5">
        <PostUserProfile />
        {/* Content */}
        <div>
            <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <img src={dummyImg} alt="post image" />
        </div>
        <PostReactionOption />
    </div>
}

export default PostItem;