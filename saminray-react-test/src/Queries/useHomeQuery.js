import { useQuery } from "@tanstack/react-query";
import fetchHome from "../api/homeApi/homeApi";

const useHomeQuery = () => {
    const posts = useQuery({
        queryKey: ["posts"],
        queryFn: () => fetchHome()
    })
    return posts
}
export default useHomeQuery