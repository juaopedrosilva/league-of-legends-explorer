import styled from 'styled-components'

export const Container = styled.div`
  width: 92%;
  margin: 0 auto;
`

export const Listing = styled.ul`
  width: 100%;
  display: flex;
  list-style-type: none;
  flex-wrap: wrap;
  justify-content: space-between;
  
  li {
    cursor: pointer;
    margin-bottom: 5%;
    > img {
      width: 232px;
      height: 262px;
      object-fit:cover;
    }
  }
`