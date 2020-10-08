import Link from 'next/link'

import { Container, Listing } from '../styles/pages/home'

export default function Home({ data }) {
  return (
    <Container>
      <Listing>
        {Object.keys(data).map(key => {
          const {  name } = data[key]
          return (
            <>
              <Link href={`champion/${name}`}>
                <li key={key}>
                  <img  
                    src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${key}_0.jpg`}
                    loading="lazy" 
                    alt={name} 
                  />
                  <p>
                    {name}
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
  const response = await fetch('https://ddragon.leagueoflegends.com/cdn/10.20.1/data/pt_BR/champion.json');
  const { data } = await response.json();

  return {
    props: {
      data,
    }, 
  }
};