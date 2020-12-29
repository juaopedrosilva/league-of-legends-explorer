import Link from 'next/link'
import Image from 'next/image'

import { Container, Listing } from '../styles/pages/home'

export default function Home({ data }) {
  return (
    <Container>
      <Listing>
        {Object.keys(data).map(key => {
          const { name } = data[key]
          console.table(data[key])
          return (
            <>
              <Link href={`champion/${key}`}>
                <li key={key}>
                  <Image
                    src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${key}_0.jpg`}
                    alt={key}
                    width={250}
                    height={250}
                    qualit={100}
                    layout="intrinsic"
                  />
                  <p>
                    {data[key].key} {name}
                  </p>
                </li>
              </Link>
            </>
          )
        })}
      </Listing>
    </Container>
  )
}

export const getStaticProps = async () => {
  const response = await fetch(
    'https://ddragon.leagueoflegends.com/cdn/10.20.1/data/pt_BR/champion.json'
  )
  const { data } = await response.json()

  return {
    props: {
      data,
    },
  }
}
