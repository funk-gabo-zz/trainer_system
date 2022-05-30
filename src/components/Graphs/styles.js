import styled from 'styled-components'

export const GraphsContainer = styled.div`
    display: grid;
    width: 100%;
    justify-content: space-around;
    grid-template-columns: repeat(3, minmax(320px, 500px));
    @media (max-width: 1000px) {
    grid-template-columns: repeat(2, minmax(320px, 400px));
    }
    @media (max-width: 640px) {
    grid-template-columns: repeat(1, minmax(320px, 400px));
    }
`

export const GraphItem = styled.div`
  padding: 10px;
  height: 320px;
  object-fit: cover;
`
export const GraphItemGrid = styled.div`
  padding: 10px;
  height:300px;
  @media (max-width: 1000px) {
    grid-area: 2 / 1 / 3 / 3;
    }
  @media (max-width: 640px) {
  grid-area: auto;
  }
`