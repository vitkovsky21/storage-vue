import axios from 'axios'

export default axios.create({
  baseURL: './data.json',
  responseType: 'json',
  headers: {
    'Content-type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  }
})
