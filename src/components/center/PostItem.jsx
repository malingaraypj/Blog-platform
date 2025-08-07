import PostUserProfile from "./PostUserProfile";
import dummyImg from "../../assets/image.png";
import PostReactionOption from "./PostReactionOption";
import { useNavigate } from "react-router";
import { useMutation } from "@tanstack/react-query";
import { queryClient } from "../../api/helper";
import { handlePostInteraction } from "../../api/post";

function PostItem({ data }) {
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: async (interactionType) => {
      return handlePostInteraction(data._id, interactionType);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
      queryClient.invalidateQueries({ queryKey: ["post", data._id] });
      queryClient.invalidateQueries({ queryKey: ["post", "myposts"] });
    },
    onError: (err) => {
      console.error("Interaction failed:", err);
    },
  });

  return (
    <div className=" bg-gray-900 rounded-xl p-3 m-5 hover:scale-105 transition-all duration-200 cursor-pointer">
      <PostUserProfile data={data} />
      {/* Content */}
      <div
        onClick={() => {
          navigate(`/${data._id}`);
        }}
      >
        <p className="text-sm">{data.content}</p>
        <img src={dummyImg} alt="post image" />
      </div>
      <PostReactionOption
        data={data}
        handleInteractions={(type) => mutation.mutate(type)}
      />
    </div>
  );
}

export default PostItem;
