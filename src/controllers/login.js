import axios from 'axios'

export default {























    
  get () {
    const options = {
      method: 'GET',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      },
      url: 'http://192.168.0.23:3001/'
    }
    axios(options).then(function (response) {
      console.log('response', response.data)
    })
  },
  register (data) {
    const options = {
      method: 'POST',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      },
      data: data,
      url: 'http://192.168.0.23:3001/user'
    }
    axios(options).then(function (response) {
      console.log('response', response.data)
    })
  },
  login (data) {
    const options = {
      method: 'POST',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      },
      data: data,
      url: 'http://192.168.0.23:3001/login'
    }
    axios(options).then(function (response) {
      console.log('response', response.data)
    })
  }
}
