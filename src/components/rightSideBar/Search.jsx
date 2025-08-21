import { useState } from "react";
import SearchCard from "../home/searchCard";
import { useSearch } from "@/Hooks/users/useSearch";
import { searchUsers } from "@/api/user";
import SearchInput from "@/utils/searchInput";
import { IoArrowBackSharp } from "react-icons/io5";

function Search() {
  const [searchText, setSearchText] = useState("");

  const { data } = useSearch(searchUsers, "users", searchText);

  return (
    <>
      <div>
        <SearchInput
          searchText={searchText}
          onSearchChange={(val) => setSearchText(val)}
        />
      </div>
      <SearchCard users={data} />
    </>
  );
}

export default Search;
