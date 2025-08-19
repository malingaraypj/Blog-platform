import { useGetBookmarks } from "@/Hooks/post/useGetBookmarks";
import PostDisplayWrapper from "../Posts/PostDisplayWrapper";

function Bookmarks() {
  const { data, isLoading } = useGetBookmarks();

  return <PostDisplayWrapper data={data} isLoading={isLoading} />;
}

export default Bookmarks;
