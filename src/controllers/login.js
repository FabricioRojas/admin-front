import axios from 'axios'

export default {
  login () {
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
  }
}
