import { Textarea } from "../ui/textarea";
import EmojiSelector from "./emojiSelector";
import {
  BsFillHeartFill,
  BsFillStarFill,
  BsEmojiLaughingFill,
} from "react-icons/bs";
import { FaFire, FaThumbsUp, FaRocket, FaPaw } from "react-icons/fa";
import { GiPartyPopper, GiSun, GiDiamondTrophy } from "react-icons/gi";
import { FiMusic } from "react-icons/fi";
import { useState } from "react";
import ProfileAvatar from "../profile/ProfileAvatar";
import FileUploadInput from "@/utils/file-upload";
import { Button } from "../ui/button";
import { useReplyPost } from "@/Hooks/post/useReplyPost";

import { useDispatch } from "react-redux";
import { newPostActions } from "@/store/NewPost/newPost";
import { useCreatePost } from "@/Hooks/post/useCreatePost";
import { MultiSelectInput } from "../../utils/MultiSelectInput";

// Each icon mapped to a Unicode emoji equivalent
const emojiOptions = [
  { icon: BsEmojiLaughingFill, label: "Laugh", char: "😂" },
  { icon: BsFillHeartFill, label: "Love", char: "❤️" },
  { icon: BsFillStarFill, label: "Star", char: "⭐" },
  { icon: FaFire, label: "Fire", char: "🔥" },
  { icon: FaThumbsUp, label: "Like", char: "👍" },
  { icon: GiPartyPopper, label: "Party", char: "🎉" },
  { icon: FaRocket, label: "Rocket", char: "🚀" },
  { icon: FiMusic, label: "Music", char: "🎵" },
  { icon: GiSun, label: "Sun", char: "☀️" },
  { icon: GiDiamondTrophy, label: "Trophy", char: "🏆" },
  { icon: FaPaw, label: "Paw", char: "🐾" },
];

function NewReply({
  post_id,
  handleOpenReply,
  isDetail = false,
  isNewPost = false,
}) {
  const [replyText, setReplyText] = useState("");
  const [mediaFiles, setMediaFiles] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);

  const dispatch = useDispatch();

  // to mutate the replies of a post
  const { mutate } = useReplyPost();
  // to create a new post.
  const { mutate: newPostMutate, isPending: postPending } = useCreatePost();

  const handleEmojiSelection = (emojiChar) => {
    setReplyText((prev) => prev + emojiChar + " ");
  };

  const handlePost = () => {
    if (!replyText.trim()) return;

    const formData = new FormData();
    formData.append("content", replyText);
    formData.append("categories", selectedCategories);

    mediaFiles.forEach((m) => {
      if (m.type === "image") formData.append("image", m.file);
      if (m.type === "video") formData.append("video", m.file);
    });
    if (isNewPost) {
      newPostMutate(formData);
    } else {
      mutate({ post_id, formData });
    }
    if (!isDetail && !isNewPost) handleOpenReply(); // opening and closing of newReply component, should not be in postDetail page

    setReplyText("");
    setSelectedCategories([]);
  };

  const handleOnBlur = () => {
    if (!isNewPost) return; // Only trigger for new post mode
    if (!replyText.trim()) {
      dispatch(newPostActions.deactivate());
    }
  };

  const handleFileSelection = (file, type) => {
    setMediaFiles((prev) => {
      return [...prev, { file, type }];
    });
  };

  const handleCategorySelection = (val) => {
    setSelectedCategories((prev) =>
      prev.includes(val) ? prev.filter((item) => item !== val) : [...prev, val]
    );
  };

  return (
    <div className="w-full border border-gray-600 rounded-lg bg-black flex flex-col">
      {/* Top section with avatar & input */}
      <div className="flex px-5 pt-4 gap-4">
        <ProfileAvatar />

        <div className="flex flex-col flex-1 gap-2">
          <p className="text-sm text-muted-foreground">
            {isNewPost ? "create new post" : "Replying to @bcci"}
          </p>

          <Textarea
            className="text-base border-none resize-none focus-visible:ring-0 focus:outline-none flex-1 w-full"
            placeholder={
              isNewPost ? "What's happening?" : "Place your reply..."
            }
            onBlur={handleOnBlur}
            value={replyText}
            onChange={(e) => setReplyText(e.target.value)}
          />
        </div>
      </div>

      {/* Bottom action bar */}
      <div className="flex items-center justify-between px-5 py-3 border-t border-gray-600">
        <div className="flex items-center gap-3">
          <FileUploadInput
            type="image"
            onSelect={(file) => handleFileSelection(file, "image")}
          />

          <EmojiSelector
            emojiOptions={emojiOptions}
            onSelect={(emoji) => handleEmojiSelection(emoji.char)}
          />
          <MultiSelectInput
            selected={selectedCategories}
            setSelected={handleCategorySelection}
            options={["sports", "entertainment", "music", "news"]}
          />
        </div>

        <Button
          onClick={handlePost}
          className={`bg-blue-500 hover:bg-blue-600 hover:scale-105 transition-transform`}
        >
          {postPending ? "creating..." : "Post"}
        </Button>
      </div>
    </div>
  );
}

export default NewReply;
