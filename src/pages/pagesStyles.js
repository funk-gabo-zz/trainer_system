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
export const PanelContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width:100%;
`
export const PanelForm = styled.div`
  display:flex;
  flex-wrap: wrap;
  gap: 2px;
  width: 100%;
  padding: 15px;
  min-width: 290px;
  max-width: 700px;
`

export const PanelItem = styled.div`
  display:flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2px;
  width: 100%;
  padding: 15px;
  min-width: 290px;
  max-width: 700px;
`
export const DeleteIcon = styled.span`
  cursor: pointer;
`

export const PanelCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: purple;
  width: 100%;
  max-width: 111px;
  background:linear-gradient(to bottom, #599bb3 5%, #408c99 100%);
	background-color:#599bb3;
	border-radius:8px;
	color:#ffffff;
	font-family:Arial;
	font-size:13px;
	padding:6px 9px;
	text-decoration:none;
	text-shadow:0px 1px 0px #3d768a;
`