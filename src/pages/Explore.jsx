import ExploreTabs from "@/components/Explore/ExploreTabs";
import SearchInput from "@/utils/searchInput";
import { useState } from "react";
import { IoArrowBackSharp } from "react-icons/io5";

function Explore() {
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
      <ExploreTabs />
    </div>
  );
}

export default Explore;
