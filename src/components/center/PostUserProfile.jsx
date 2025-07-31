function PostUserProfile({ data }) {
  return (
    <div className="w-full h-12 flex gap-2 items-center">
      <div className="w-12 h-12 rounded-full bg-amber-200"></div>
      <div className="flex flex-col justify-center">
        <span className="font-bold">{data.user}</span>
        <span className="text-sm">@BCCI</span>
      </div>
    </div>
  );
}

export default PostUserProfile;
