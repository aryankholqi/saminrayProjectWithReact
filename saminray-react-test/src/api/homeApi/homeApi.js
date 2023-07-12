import axios from "axios";

function fetchHome() {
    return axios({
        url: "https://jsonplaceholder.typicode.com/posts",
        method: "GET",
    }).then(res => {
        return res.data.slice(0,4)
    }).catch(err => {
        console.log(err.message)
    })
}
export default fetchHome