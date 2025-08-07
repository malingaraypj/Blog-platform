import { getData, patchData } from "./helper";

const baseUrl = import.meta.env.VITE_BACKEND_URL;

export const getFollowSuggestions = async (limit = 10) => {
  const url = new URL(`${baseUrl}/users/suggestionToFollow`);

  // Convert limit to number before sending
  url.searchParams.append("limit", Number(limit));
  return await getData(url.toString());
};

export const followUser = async ({ userId }) => {
  const url = `${baseUrl}/users/startFollowing/${userId}`;
  return await patchData(url);
};

export const getMe = async () => {
  const url = `${baseUrl}/users/getMe`;
  return await getData(url);
};
