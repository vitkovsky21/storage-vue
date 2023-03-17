import axios from 'axios'

export default axios.create({
  baseURL: 'https://vitkovsky21.github.io/storage-vue/data.json',
  responseType: 'json',
  headers: {
    'Content-type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
  }
})
