import { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";

function Search() {
    const [searchActive, setSearchActive] = useState(false);
    const [searchText, setSearchText] = useState("");

    const handleSearchFocus = () => setSearchActive(true);
    const handleSearchBlur = () => {
        if (!searchText) {
            setSearchActive(false);
        }
    };

    const handleSearchChange = (e) => {
        setSearchText(e.target.value);
    };
    return <div className={`flex gap-3 items-center justify-start mx-10 px-5 py-2 mt-5 border rounded-lg ${
        searchActive ? 'border-blue-500' : 'border-gray-300'
    }`}>
        <IoSearchOutline className={searchActive ? 'text-blue-500' : ''} />
        <input 
            type="text"
            value={searchText}
            onChange={handleSearchChange}
            onFocus={handleSearchFocus}
            onBlur={handleSearchBlur}
            placeholder="Search"
            className="bg-transparent outline-none w-[80%]"
        />
    </div>
}

export default Search;