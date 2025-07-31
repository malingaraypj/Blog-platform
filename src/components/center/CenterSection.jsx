import { useState } from "react";
import PostItem from "./PostItem";
import NewPost from "./NewPost";
import { useFetchData } from "../../Hooks/useFetchData";

function CenterSection() {
  const [forYou, setForYou] = useState(true);
  const [pageNumber, setpageNumber] = useState(1);

  const { data, loading, error } = useFetchData(
    `post?page=${pageNumber}&limit=10`,
    []
  );

  console.log(data);

  return (
    <div className="w-[45%] overflow-y-auto">
      <div className="flex justify-around items-center my-5 h-15 font-bold">
        <h1
          className={`${
            forYou ? "text-white" : "text-gray-500"
          } cursor-pointer`}
          onClick={() => setForYou(true)}
        >
          For you
        </h1>
        <h1
          className={`${
            !forYou ? "text-white" : "text-gray-500"
          } cursor-pointer`}
          onClick={() => setForYou(false)}
        >
          Following
        </h1>
      </div>
      {data.length > 0 &&
        data.map((post) => <PostItem key={post._id} data={post} />)}
    </div>
  );
}

export default CenterSection;
