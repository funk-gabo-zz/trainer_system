import styled from 'styled-components'

export const PointerItem = styled.li`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100px;
    background-color: #6d6e93;
    
`
export const Title = styled.h4`
    color: white;
    margin: 0;
`

export const Value = styled.h1`
    color: #fff690;
    margin: 0;
`

export const PointerCountContainer = styled.div`
    display: flex;
    justify-content: center;
    background-color: black;
    height: 100px;
    width:100%;
    max-width: 500px;
    @media (min-width: 1024px) {
    width: 30%;
    max-width: 420px;
    background-color:red;
  }
`