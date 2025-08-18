import { getData, patchData, postData } from "./helper";

// Base URL for all requests
export const baseUrl = import.meta.env.VITE_BACKEND_URL;

export const getDiscoverPosts = async () => {
  const url = `${baseUrl}/post/`;
  return await getData(url);
};

export const getMyPosts = async () => {
  const url = `${baseUrl}/post/myPosts`;
  return await getData(url);
};

export const getFollowingPosts = async () => {
  const url = `${baseUrl}/post/followingPosts`;
  return await getData(url);
};

export const getPostById = async (postId) => {
  const url = `${baseUrl}/post/${postId}`;

  return await getData(url);
};

export const getReplyPosts = async (postId) => {
  const url = `${baseUrl}/post/${postId}/replies`;
  return await getData(url);
};

// Hashtag-related API functions
export const getTrendingHashtags = async (limit) => {
  const url = new URL(`${baseUrl}/post/trendingHashtags`);

  url.searchParams.append("limit", limit);
  return await getData(url.toString());
};

export const toggleLike = ({ post_id }) => {
  const url = `${baseUrl}/post/likePost/${post_id}`;

  return patchData(url);
};

export const replyPost = async ({ post_id, formData }) => {
  const url = `${baseUrl}/post/replyPost/${post_id}`;
  return await postData(url, formData);
};

export const createPost = async (data) => {
  const url = `${baseUrl}/post/newPost`;
  console.log(data.get("content"));
  return await postData(url, data);
};

export const savePost = async (post_id) => {
  const url = `${baseUrl}/post/savePost/${post_id}`;
  return await patchData(url);
};
