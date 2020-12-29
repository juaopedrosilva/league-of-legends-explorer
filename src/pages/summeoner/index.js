import { useState } from 'react'
import axios from 'axios'
export default function Summeoner() {
  const [name, setName] = useState('')
  const [data, setData] = useState(null)

  async function handleSubmit() {
    const { data } = await axios.get(`api/summoner/${name}`)

    setData(data)
  }

  return (
    <>
      <input onChange={e => setName(e.target.value)} />
      <button onClick={handleSubmit}>Enviar </button>
      {data && (
        <div>
          <img
            style={{ borderRadius: 100, width: 150, height: 150 }}
            src={`http://ddragon.leagueoflegends.com/cdn/10.25.1/img/profileicon/${data.profileIconId}.png`}
          />
          <h2>{data.name}</h2>
        </div>
      )}
    </>
  )
}
