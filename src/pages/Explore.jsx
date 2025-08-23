import { getPostsByCategory } from "@/api/post";
import ExploreTabs from "@/components/Explore/ExploreTabs";
import PostDisplayWrapper from "@/components/Posts/PostDisplayWrapper";
import SearchInput from "@/utils/searchInput";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { IoArrowBackSharp } from "react-icons/io5";

function Explore() {
  const [category, setCategory] = useState("general");
  const { data, isLoading } = useQuery({
    queryKey: ["posts", category],
    queryFn: () => getPostsByCategory(category),
    staleTime: 1000 * 60 * 5,
    cacheTime: 1000 * 60 * 10,
    refetchOnWindowFocus: false,
    retry: 1,
  });

  const [searchText, setsearchText] = useState();
  return (
    <div className="mt-5 mx-10">
      <div className="flex w-full items-center justify-center">
        <IoArrowBackSharp />
        <SearchInput
          searchText={searchText}
          onSearchChange={(val) => setsearchText(val)}
        />
      </div>
      <ExploreTabs onTabChange={(val) => setCategory(val)} />
      <PostDisplayWrapper data={data} isLoading={isLoading} />
    </div>
  );
}

export default Explore;
