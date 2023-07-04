import axios from "axios";

export const fetchGetUsers = ()=>{
    return axios({
        url:"https://jsonplaceholder.typicode.com/users",
        method:"GET"
    })
}
export const fetchDeleteUsers = (id)=>{
    return axios({
        url:`https://jsonplaceholder.typicode.com/users/${id}`,
        method:"DELETE"
    })
}
