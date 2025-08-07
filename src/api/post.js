import { QueryClient } from "@tanstack/react-query";
import { getData } from "./helper";

// QueryClient to use it globally
export const queryClient = new QueryClient();

// Base URL for all requests
const baseUrl = import.meta.env.VITE_BACKEND_URL;

// Post-related API functions
export const getAllPosts = async (followingPosts = false) => {
  const endpoint = followingPosts ? "followingPosts" : "";
  const url = `${baseUrl}/post/${endpoint}`;
  console.debug("Fetching posts from:", url);
  return await getData(url);
};

export const getPostById = async (postId) => {
  const url = `${baseUrl}/post/${postId}`;

  return await getData(url);
};

// Hashtag-related API functions
export const getTrendingHashtags = async (limit) => {
  const url = new URL(`${baseUrl}/post/trendingHashtags`);

  url.searchParams.append("limit", limit);
  return await getData(url.toString());
};
