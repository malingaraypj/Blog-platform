import axios from "axios";
import { createContext, useEffect, useState } from "react";

const PostContext = createContext({
    post: [],
    setPost: () => {},
    postLoading: false,
    setPostLoading: () => {},
    error: '',
    setError: () => {},
    fetchPosts: () => {}
});

export function PostProvider({ children }) {
    const [post, setPost] = useState([]);
    const [postLoading, setPostLoading] = useState(false);
    const [error, setError] = useState('');

    // Fetch posts from backend
    const fetchPosts = async () => {
        setPostLoading(true);
        setError(''); 

        try {
            const url = import.meta.env.VITE_BACKEND_URL;
            const response = await axios.get(`${url}/post/`);
            setPost(response.data);
        } catch (error) {
            setError(error.message);
        } finally {
            setPostLoading(false);
        }
    };

    useEffect(() => {
        fetchPosts();
    }, []);

    const contextValue = {
        post,
        setPost,
        postLoading,
        setPostLoading,
        error,
        setError,
        fetchPosts
    };

    return (
        <PostContext.Provider value={contextValue}>
            {children}
        </PostContext.Provider>
    );
}

export default PostProvider;
