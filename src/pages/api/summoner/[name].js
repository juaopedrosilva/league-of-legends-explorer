import API from '@services/api'

export default async function handler(req, res) {
  try {
    const { name } = req.query

    const { data } = await API.get(`summoners/by-name/${name}`)

    delete data.puuid

    return res.json({ ...data })
  } catch (error) {
    return res.json({ result: false })
  }
}
