import { useQuery } from "@tanstack/react-query";
import { getMyPosts } from "../../api/post";
import Loading from "../../utils/Loading";
import PostDisplayWrapper from "../center/PostDisplayWrapper";

function Myposts() {
  const { data, isLoading } = useQuery({
    queryKey: ["post", "myposts"],
    queryFn: getMyPosts,
  });
  if (isLoading) {
    return <Loading />;
  }

  return <PostDisplayWrapper data={data} />;
}

export default Myposts;
