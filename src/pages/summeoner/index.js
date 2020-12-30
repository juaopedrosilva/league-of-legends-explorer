import { useState } from 'react'
import Image from 'next/image'
import axios from 'axios'

import { find } from '@services/lol'

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
          <Image
            src={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${find(data.masters[0]?.championId).id}_3.jpg`}
            width={1215}
            height={717}
            qualit={100}
            loading={'eager'}
            layout="intrinsic"
          />
          <Image
            style={{ borderRadius: 100 }}
            width={150}
            height={150}
            priority={true}
            loading={'eager'}
            src={`http://ddragon.leagueoflegends.com/cdn/10.25.1/img/profileicon/${data.summoner.profileIconId}.png`}
          />
          <h2>{data.summoner.name}</h2>
          <h3>level: {data.summoner.summonerLevel}</h3>
          <ul style={{ display: 'flex'}}>
            {data.masters.slice(0, 3).map(item => {
              return (
                <li>
                  <Image
                    style={{ borderRadius: 100 }}
                    width={150}
                    height={150}
                    priority={true}
                    loading={'eager'}
                    src={`https://ddragon.leagueoflegends.com/cdn/10.25.1/img/champion/${find(item.championId).id}.png`}
                  />
                  <p>Maestria: {item.championLevel} pontos: {item.championPoints}</p>
                </li>
               )
            })}
          </ul>
        </div>
      )}
    </>
  )
}
