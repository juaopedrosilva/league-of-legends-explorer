import axios from 'axios'

const api = axios.create({
  baseURL: `https://br1.api.riotgames.com/lol/summoner/v4/`,
})

api.interceptors.request.use(function (config) {
  config.headers['X-Riot-Token'] = 'RGAPI-80872fad-3284-40b7-aefc-60420074f96a'

  return config
})

export default api
