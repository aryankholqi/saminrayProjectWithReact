import axios from "axios";

function fetchHome(setPosts,setLoaded) {
    axios({
        url: "https://jsonplaceholder.typicode.com/posts",
        method: "GET",
    }).then(res => {
        setPosts(res.data.slice(0, 4))
        setLoaded(true)
    }).catch(err => {
        console.log(err.message)
    })
}
export default fetchHome