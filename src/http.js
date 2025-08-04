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

// Helper function to getData from backend
const getData = async (url, signal) => {
  const token = getToken();
  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      signal: signal || undefined,
      timeout: 10000,
    });
    return response.data.data;
  } catch (err) {
    const errorMessage =
      err.response?.data?.message || "An unknown error occurred";
    console.log(errorMessage);
    throw new Error(errorMessage);
  }
};

export const getAllPosts = async (signal, followingPosts = false) => {
  let url = `${baseUrl}/post/`;
  if (followingPosts) {
    url += "followingPosts";
  }
  return await getData(url, signal);
};

export const getTrendingHashtags = async (signal) => {
  const url = `${baseUrl}/post/trendingHashtags`;
  return await getData(url, signal);
};

export const getFollowSuggestions = async (signal, limit) => {
  const url = `${baseUrl}/post/suggestionToFollow${
    limit ? `?limit=${limit}` : ""
  }`;
  return await getData(url, signal);
};
