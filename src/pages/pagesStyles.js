import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #f8f8f8;
  height: calc(100vh - 40px);
`;

export const Section = styled.section`
  height: auto;
  width: 100%;
  margin: 20px 0;
  padding: 0 20px;
  @media (max-width: 500px) {
    padding: 0;
  }
`;

export const FilterSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: left;
  width: 100%;
`
export const BoardDate = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
`