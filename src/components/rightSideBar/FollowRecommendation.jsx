import { useQuery } from "@tanstack/react-query";
import { getFollowSuggestions } from "../../api/user";
import FollowRecommendationCard from "./FollowRecommendationCard";
import { LoaderFive } from "../ui/loader";

function FollowRecommendation() {
  const { data, isLoading } = useQuery({
    queryKey: ["follow", "suggestion"],
    queryFn: () => getFollowSuggestions(4),
  });
  if (isLoading) {
    return <LoaderFive />;
  }
  return (
    <div className="border border-gray-400 mx-5 my-5 p-5 rounded-lg h-110 flex flex-col justify-start overflow-auto gap-5 cursor-pointer">
      <h1 className="text-lg font-bold">Whom to follow</h1>
      {data &&
        data.length > 0 &&
        data.map((user) => (
          <FollowRecommendationCard key={user.userId} data={user} />
        ))}
    </div>
  );
}

export default FollowRecommendation;
