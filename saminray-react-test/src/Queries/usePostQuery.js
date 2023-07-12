import { useMutation } from "@tanstack/react-query";
import fetchPosts from "../api/postsApi/postsApi";

export const usePostMutation = (setTitle,setDescription) => {
    const postQuery = useMutation({
        mutationFn: (title, description) => {
            fetchPosts(title, description)
            setTitle("")
            setDescription("")
        },
    })
    return postQuery
}