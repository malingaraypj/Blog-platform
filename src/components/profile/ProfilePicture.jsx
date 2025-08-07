import { useRef } from "react";
import { CgProfile } from "react-icons/cg";

function ProfilePicture() {
  const fileInputRef = useRef(null);

  const handleClick = () => {
    fileInputRef.current.click(); // Trigger file input when div is clicked
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // You can now handle uploading or previewing the file
      console.log("Selected file:", file);
    }
  };
  return (
    <div className="w-full h-72 my-5 relative">
      <div className="w-full h-52 bg-gray-600"></div>

      {/* Wrap with `group` to enable group-hover */}
      <div
        onClick={handleClick}
        className="group absolute flex justify-center items-center text-5xl w-32 h-32 rounded-full border-4 border-black bg-purple-500 -mt-16 ml-5 cursor-pointer transition duration-300"
      >
        M{/* Hidden by default, visible on hover */}
        <div className="absolute inset-0 bg-gray-600 bg-opacity-50 rounded-full flex justify-center items-center opacity-0 group-hover:opacity-80 transition-opacity duration-300">
          <CgProfile className="text-white text-4xl" />
        </div>
        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          onChange={handleFileChange}
          className="hidden"
        />
      </div>

      <div className="w-full flex justify-end items-center h-18">
        <button className="cursor-pointer bg-blue-500 px-5 py-3 rounded-lg text-white font-bold mr-5 hover:bg-blue-600 transition duration-300">
          Edit profile
        </button>
      </div>
    </div>
  );
}

export default ProfilePicture;
