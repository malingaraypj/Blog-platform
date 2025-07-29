import { useState } from "react";
import PostItem from "./PostItem";
import NewPost from "./NewPost";

function CenterSection() {
    const [forYou, setForYou] = useState(true);

    return <div className="w-[45%] overflow-y-auto">
        <div className="flex justify-around items-center my-5 h-15 font-bold">
            <h1 
                className={`${forYou ? 'text-white' : 'text-gray-500'} cursor-pointer`} 
                onClick={() => setForYou(true)}
            >
                For you
            </h1>
            <h1 
                className={`${!forYou ? 'text-white' : 'text-gray-500'} cursor-pointer`}
                onClick={() => setForYou(false)}
            >
                Following
            </h1>
        </div>
       <NewPost />
        <PostItem/>
        <PostItem/>
        <PostItem/>
    </div>
}

export default CenterSection;