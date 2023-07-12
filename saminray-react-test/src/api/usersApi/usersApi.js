import axios from "axios";
import Swal from 'sweetalert2'
export const fetchGetUsers = () => {
    return axios({
        url: "https://jsonplaceholder.typicode.com/users",
        method: "GET"
    }).then(res => {
        return res.data
    })
}
export const fetchDeleteUsers = (id) => {
    const Swal = require('sweetalert2')
    return axios({
        url: `https://jsonplaceholder.typicode.com/users/${id}`,
        method: "DELETE"
    }).then(res => {
        Swal.fire({
            title: 'Successful!',
            text: 'The specified user has been removed',
            icon: 'info',
            confirmButtonText: 'Close'
        })
    })
}
