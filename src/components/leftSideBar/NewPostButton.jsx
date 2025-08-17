import { useDispatch } from "react-redux";
import { Button } from "../ui/button";
import { newPostActions } from "@/store/NewPost/newPost";
import { useNavigate } from "react-router";

function NewPostButton() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleButtonPress = () => {
    dispatch(newPostActions.activate());
    navigate("/app/home");
  };
  return (
    <Button
      onClick={handleButtonPress}
      size="lg"
      className="bg-blue-700 cursor-pointer hover:bg-blue-800 w-[80%] text-lg hover:scale-105"
    >
      New Post
    </Button>
  );
}

export default NewPostButton;
