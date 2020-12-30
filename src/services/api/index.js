import axios from 'axios'

const api = axios.create({
  baseURL: `https://br1.api.riotgames.com/lol/`,
})

api.interceptors.request.use(function (config) {
  config.headers['X-Riot-Token'] = 'RGAPI-4dd2caee-58fd-4730-9e4f-cad24f369aac'

  return config
})

export default api
