function Loading({ message = "Loading...", size = "medium" }) {
  const sizeClasses = {
    small: "h-8 w-8",
    medium: "h-12 w-12",
    large: "h-16 w-16",
  };
  return (
    <div className="flex w-full h-full flex-col items-center justify-center p-4">
      <div
        className={
          "animate-spin rounded-full border-4 border-solid border-current border-r-transparent" +
          sizeClasses[size]
        }
        role="status"
      ></div>
      <p className="mt-3 text-gray-600">{message}</p>
    </div>
  );
}

export default Loading;
