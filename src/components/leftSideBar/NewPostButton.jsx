import { useDispatch } from "react-redux";
import { Button } from "../ui/button";
import { newPostActions } from "@/store/NewPost/newPost";

function NewPostButton() {
  const dispatch = useDispatch();
  return (
    <Button
      onClick={() => dispatch(newPostActions.activate())}
      size="lg"
      className="bg-blue-700 cursor-pointer hover:bg-blue-800 w-[80%] text-lg hover:scale-105"
    >
      New Post
    </Button>
  );
}

export default NewPostButton;
