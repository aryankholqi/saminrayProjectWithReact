import { useMutation, useQuery } from "@tanstack/react-query";
import { fetchDeleteUsers, fetchGetUsers } from "../api/usersApi/usersApi";

export const useUsersQuery = () => {
    const usersQuery = useQuery({
        queryKey:["users"],
        queryFn:()=>fetchGetUsers()
    })
    return usersQuery
}

export const useUsersMutation = () => {
    const usersMutation = useMutation({
        mutationFn:(id)=>fetchDeleteUsers(id)
    })
    return usersMutation
}