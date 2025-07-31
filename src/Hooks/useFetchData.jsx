import axios from "axios";
import { useEffect, useState } from "react";

// const QueryType = {
//   allposts: "/post/",
//   myposts: "/post/myposts",
//   tweet: "/post/gettweet",
//   comment: "/post/getcomment",
//   like: "/post/like",
//   retweet: "/post/retweet",
//   follow: "/post/follow",
//   unfollow: "/post/unfollow",
//   tweetDetail: "/post/tweetDetail",
//   userDetail: "/user/userDetail",
//   userTweets: "/user/userTweets",
//   userFollowers: "/user/userFollowers",
//   userFollowing: "/user/userFollowing",
//   userLikes: "/user/userLikes",
//   userRetweets: "/user/userRetweets",
//   userComments: "/user/userComments",
//   userTweetsAndRetweets: "/user/userTweetsAndRetweets",
//   userTweetsAndComments: "/user/userTweetsAndComments",
//   userTweetsAndRetweetsAndComments: "/user/userTweetsAndRetweetsAndComments",
//   allTweets: "/post/allTweets",
// };

export const useFetchData = (query, initialData) => {
  const [data, setData] = useState(initialData);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // if (!query || !QueryType[query]) {
    //   setError(`Unknown query: ${query}`);
    //   return;
    // }

    const fetchData = async () => {
      setLoading(true);
      setError(null);
      const base_url = import.meta.env.VITE_BACKEND_URL;
      const url = `${base_url}/${query}`;

      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(url, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setData(response.data.data);
      } catch (err) {
        if (axios.isCancel(err)) return;
        setError(err.response?.data?.message || "Error fetching data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [query]);

  return {
    data,
    loading,
    error,
  };
};
