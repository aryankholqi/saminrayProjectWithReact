import axios from "axios";
import Swal from 'sweetalert2'

const fetchPosts = (title, description) => {
    const Swal = require('sweetalert2')
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
        .then(res => {
            Swal.fire({
                title: 'Successful',
                text: 'Your Post has been completely posted',
                icon: 'success',
                confirmButtonText: 'Close',
            })
        })
}
export default fetchPosts