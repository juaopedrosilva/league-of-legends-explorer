import Champions from '@services/lol/champion.json'

export function find(key) {
  console.log(key)
  const champion = Object.keys(Champions.data).find(item => Champions.data[item].key === String(key))

  const { id, name, title } = Champions.data[champion]

  return { id, name, title }
} 