import { BsImageFill, BsBarChartFill } from "react-icons/bs";
import { FaRegSmile } from "react-icons/fa";
import { BsCameraVideoFill } from "react-icons/bs"; 
import { PiGifFill } from "react-icons/pi"; 

const options = {
  image: {
    icon: <BsImageFill />,
    label: "Image",
  },
  video: {
    icon: <BsCameraVideoFill />,
    label: "Video",
  },
  gif: {
    icon: <PiGifFill />,
    label: "GIF",
  },
  poll: {
    icon: <BsBarChartFill />,
    label: "Poll",
  },
  emoji: {
    icon: <FaRegSmile />,
    label: "Emoji",
  },
};

function PostOptionsTab() {
  return (
    <div className="flex gap-4 text-white">
      {Object.keys(options).map((option) => (
        <p key={option} className="flex items-center gap-1 text-sm cursor-pointer hover:text-blue-400">
          {options[option].icon}
          <span>{options[option].label}</span>
        </p>
      ))}
    </div>
  );
}

export default PostOptionsTab;
