import axios from 'axios'

export default {
    get() {
        const options = {
            method: 'GET',
            headers: {'Access-Control-Allow-Origin': '*','Content-Type': 'application/json'},
            url: `${process.env.VUE_APP_API_URL}/`
        }
        axios(options).then(function (response) {
            console.log('response', response.data)
        })
    },
    register(data) {
        const options = {
            method: 'POST',
            headers: {'Access-Control-Allow-Origin': '*','Content-Type': 'application/json'},
            data: data,
            url: `${process.env.VUE_APP_API_URL}/user`
        }
        axios(options).then(function (response) {
            console.log('response', response.data)
        })
    },
    login(data) {
        const options = {
            method: 'POST',
            headers: {'Access-Control-Allow-Origin': '*','Content-Type': 'application/json'},
            data: data,
            url: `${process.env.VUE_APP_API_URL}/login`
        }
        axios(options).then(function (response) {
            console.log('response', response.data)
        })
    }
}
