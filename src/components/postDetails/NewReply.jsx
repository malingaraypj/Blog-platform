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

function NewReply({ post_id, handleOpenReply, isDetail = false }) {
  const [replyText, setReplyText] = useState("");
  const { mutate } = useReplyPost();

  const handleEmojiSelection = (emojiChar) => {
    setReplyText((prev) => prev + emojiChar + " ");
  };

  const handlePost = () => {
    if (!replyText.trim()) return;
    mutate({ post_id, reply: replyText });
    if (!isDetail) handleOpenReply();

    setReplyText("");
  };

  return (
    <div className="w-full border border-gray-600 rounded-lg bg-black flex flex-col">
      {/* Top section with avatar & input */}
      <div className="flex px-5 pt-4 gap-4">
        <ProfileAvatar />

        <div className="flex flex-col flex-1 gap-2">
          <p className="text-sm text-muted-foreground">Replying to @bcci</p>

          <Textarea
            className="text-base border-none resize-none focus-visible:ring-0 focus:outline-none flex-1 w-full"
            placeholder="Place your reply..."
            value={replyText}
            onChange={(e) => setReplyText(e.target.value)}
          />
        </div>
      </div>

      {/* Bottom action bar */}
      <div className="flex items-center justify-between px-5 py-3 border-t border-gray-600">
        <div className="flex items-center gap-3">
          <FileUploadInput type="image" />
          <FileUploadInput type="video" />
          <EmojiSelector
            emojiOptions={emojiOptions}
            onSelect={(emoji) => handleEmojiSelection(emoji.char)}
          />
        </div>

        <Button
          onClick={handlePost}
          className="bg-blue-500 hover:bg-blue-600 hover:scale-105 transition-transform"
        >
          Post
        </Button>
      </div>
    </div>
  );
}

export default NewReply;
