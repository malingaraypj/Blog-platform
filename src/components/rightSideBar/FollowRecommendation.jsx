import { useQuery } from "@tanstack/react-query";
import { getFollowSuggestions } from "../../http";
import { useState } from "react";

function FollowRecommendation() {
  const [limit, setlimit] = useState(10);
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["follow suggestion"],
    queryFn: ({ signal }) => getFollowSuggestions(signal, limit),
  });
  console.log(data);
  return (
    <div className="border border-gray-400 mx-5 my-5 p-5 rounded-lg h-110 flex flex-col justify-between"></div>
  );
}

export default FollowRecommendation;
