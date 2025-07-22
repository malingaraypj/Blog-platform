import TrendingItem from "./TrendingItem";

function Trending() {
    return <div className="border border-gray-400 mx-5 my-5 p-5 rounded-lg h-110 flex flex-col justify-between">
        <h1 className="text-lg font-bold">What's happening?</h1>
        <TrendingItem/>
        <TrendingItem/>
        <TrendingItem/>
        <TrendingItem />
        <p className="text-blue-700 hover:cursor-pointer">Read More</p>
    </div>
}

export default Trending;