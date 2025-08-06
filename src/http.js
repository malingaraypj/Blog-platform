import { QueryClient } from "@tanstack/react-query";
import axios from "axios";

// QueryClient to use it globally
export const queryClient = new QueryClient();

// Base URL for all requests
const baseUrl = import.meta.env.VITE_BACKEND_URL;

// Helper function to get token safely
const getToken = () => {
  try {
    return localStorage.getItem("token") || "";
  } catch (error) {
    console.error("Error accessing localStorage:", error);
    return "";
  }
};

// Helper function to handle all GET requests
const getData = async (url) => {
  const token = getToken();
  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      timeout: 10000, // 10 second timeout
    });
    return response.data.data;
  } catch (err) {
    const errorMessage =
      err.response?.data?.message || err.message || "An unknown error occurred";
    console.error("API Request Failed:", {
      url,
      status: err.response?.status,
      message: errorMessage,
    });
    throw new Error(errorMessage);
  }
};

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

// User-related API functions
export const getFollowSuggestions = async (limit = 10) => {
  const url = new URL(`${baseUrl}/users/suggestionToFollow`);

  // Convert limit to number before sending
  url.searchParams.append("limit", Number(limit));
  return await getData(url.toString());
};
