import PostOptionsTab from "./PostOptionsTab";

function NewPost() {
    return  <div className="flex flex-col justify-start items-center gap-5 mx-5 border border-gray-400 py-10">
    <div className="flex justify-start items-center w-full">
    <div className="bg-blue-800 rounded-full flex justify-center items-center w-12 h-12 mx-5">M</div>
    <input type="text" name="post" id="post" placeholder="What's happening?." className="outline-none" />

    </div>
    <div className="flex justify-around w-full">
        <PostOptionsTab />
        <button className="bg-blue-800 cursor-pointer hover:bg-blue-900 px-3 py-2 rounded-xl">Post</button>
        </div>
    </div>
}

export default NewPost;