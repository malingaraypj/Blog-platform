import { useQuery } from "@tanstack/react-query";
import TrendingItem from "./TrendingItem";
import { getTrendingHashtags } from "../../http";
import Loading from "../../utils/Loading";
import { useState } from "react";

function Trending() {
  const [limit, setlimit] = useState(5);
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["trending", limit],
    queryFn: () => getTrendingHashtags(limit),
  });

  const handleReadMore = () => {
    setlimit(20);
  };

  // const closeReadMore = () => {
  //   setlimit(5);
  // }

  if (isLoading) {
    return <Loading />;
  }
  if (isError) {
    console.log(error);
  }
  return (
    <div className="border border-gray-400 mx-5 my-5 p-5 rounded-lg h-110 flex flex-col justify-between overflow-auto">
      <h1 className="text-lg font-bold">What's happening?</h1>
      {data &&
        data.length > 0 &&
        data.map((trend) => <TrendingItem key={trend._id} data={trend} />)}
      <p
        onClick={handleReadMore}
        className="text-blue-700 hover:cursor-pointer"
      >
        Read More
      </p>
    </div>
  );
}

export default Trending;
