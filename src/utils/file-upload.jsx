import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRef, useState } from "react";
import { FaRegImage, FaRegFileVideo } from "react-icons/fa6";

function FileUploadInput({ type }) {
  const fileRef = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileSelection = () => {
    fileRef.current?.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      console.log("Selected file:", file);
    }
  };

  return (
    <>
      <Input
        ref={fileRef}
        type="file"
        accept={
          type === "image"
            ? "image/*"
            : type === "video"
            ? "video/*"
            : undefined
        }
        className="hidden"
        onChange={handleFileChange}
      />
      <Button
        type="button"
        onClick={handleFileSelection}
        className="flex items-center gap-2 hover:bg-blue-500"
      >
        {type === "image" && <FaRegImage className="h-5 w-5" />}
        {type === "video" && <FaRegFileVideo className="h-5 w-5" />}
      </Button>
    </>
  );
}

export default FileUploadInput;
