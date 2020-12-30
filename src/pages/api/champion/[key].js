import Champions from '@services/lol/champion.json'

export default async function handler(req, res) {
  const { key } = req.query

  const champion = Object.keys(Champions.data).find(item => Champions.data[item].key === key)

  const { id, name, title } = Champions.data[champion]

  return res.json({ id, name, title})
}
