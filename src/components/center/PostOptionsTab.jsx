import { BsImageFill, BsBarChartFill } from "react-icons/bs";
import { FaRegSmile } from "react-icons/fa";
import { BsCameraVideoFill } from "react-icons/bs";
import { PiGifFill } from "react-icons/pi";

const options = {
  image: {
    icon: <BsImageFill />,
    label: "Image",
    accept: "image/*",
  },
  video: {
    icon: <BsCameraVideoFill />,
    label: "Video",
    accept: "video/*",
  },
  gif: {
    icon: <PiGifFill />,
    label: "GIF",
    accept: "image/gif",
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
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      console.log("Selected file:", file);
      // Handle upload or preview logic here
    }
  };

  return (
    <div className="flex gap-4 text-white">
      {Object.entries(options).map(([key, { icon, label, accept }]) => (
        <label
          key={key}
          htmlFor={key}
          className="flex items-center gap-1 text-sm cursor-pointer hover:text-blue-400"
        >
          {icon}
          <span>{label}</span>
          {accept && (
            <input
              type="file"
              id={key}
              accept={accept}
              onChange={handleFileChange}
              hidden
            />
          )}
        </label>
      ))}
    </div>
  );
}

export default PostOptionsTab;
