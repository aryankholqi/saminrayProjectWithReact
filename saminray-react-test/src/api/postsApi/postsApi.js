import axios from "axios";

const fetchPosts = (title, description) => {
    return axios({
        url: "https://jsonplaceholder.typicode.com/posts",
        method: "POST",
        data: {
            title: title,
            description: description,
        },
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
}
export default fetchPosts