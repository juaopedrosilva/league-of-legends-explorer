import { GetStaticProps, GetStaticPaths } from 'next'
import { useRouter } from 'next/router'

export default function Champio({ champio }) {
  const { name, blurb } = champio

  return (
    <div>
      <img src={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${name}_0.jpg`} width={1000} alt={name}/>
      <h2>{name}</h2>
      <p>{blurb}</p>
    </div>
  )
}
 
export const getStaticPaths = async () => {
  const response = await fetch(`https://ddragon.leagueoflegends.com/cdn/10.20.1/data/pt_BR/champion.json`);
  const { data } = await response.json();

  const paths = Object.keys(data).map(key => {
    return { params: { name: data[key].id } }
  });

  return {
    paths,
    fallback: false, 
  }
} 

export const getStaticProps = async (context) => {
 const { name } = context.params

 const response = await fetch(`https://ddragon.leagueoflegends.com/cdn/10.20.1/data/pt_BR/champion/${name}.json`);
 const { data } = await response.json();
 
 return {
   props: {
    champio: data[name],
   }, 
 }
}