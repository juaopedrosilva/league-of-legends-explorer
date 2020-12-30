import axios from 'axios'

import API from '@services/api'

export default async function handler(req, res) {
  try {
    const { name } = req.query

    const { data: summoner } = await API.get(`summoner/v4/summoners/by-name/${name}`)
    const { data: masters } = await API.get(`champion-mastery/v4/champion-masteries/by-summoner/${summoner.id}`)
    const { data: league } = await API.get(`league/v4/entries/by-summoner/${summoner.id}`)
  
    return res.json({ summoner, masters, league }) 
  } catch (error) {
    return res.json(false)
  }
}
