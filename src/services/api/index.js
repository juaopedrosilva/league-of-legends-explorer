import axios from 'axios'

const api = axios.create({
  baseURL: `https://br1.api.riotgames.com/lol/`,
})

api.interceptors.request.use(function (config) {
  config.headers['X-Riot-Token'] = 'RGAPI-21e1fb2a-7a24-4744-8e45-fb37aa9e72a5'

  return config
})

export default api
