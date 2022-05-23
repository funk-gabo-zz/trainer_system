import styled from 'styled-components'

export const GraphsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    height: 300px;
    margin: 30px 0 0 0;
`

export const GraphItem = styled.div`
    display: flex;
    justify-content: center;
    width: 370px;
    height:222px;
    @media (min-width: 1024px) {
    width: 320px
  }
`