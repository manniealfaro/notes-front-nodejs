import axios from 'axios'
// const baseUrl = 'http://localhost:3001/api/notes'
const baseUrl = 'https://boiling-gorge-91854-58a82c0eeb36.herokuapp.com/api/notes'

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const create = newObject => {
  const request = axios.post(baseUrl, newObject)
  return request.then(response => response.data)
}

const update = (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject)
  return request.then(response => response.data)
}

export default { getAll, create, update }