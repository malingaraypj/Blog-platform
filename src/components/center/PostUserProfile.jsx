function PostUserProfile({ data }) {
  return (
    <div className="w-full h-12 flex gap-2 items-center">
      <div className="w-12 h-12 rounded-full overflow-clip">
        <img
          className="w-full"
          src={`${
            import.meta.env.VITE_BACKEND_PUBLIC_URL
          }/images/default_profile.jpg`}
          alt="user profile photo"
        />
      </div>
      <div className="flex flex-col justify-center">
        <span className="font-bold">
          {data && data.user_name ? data.user_name : "dummy"}
        </span>
        <span className="text-sm">@BCCI</span>
      </div>
    </div>
  );
}

export default PostUserProfile;
