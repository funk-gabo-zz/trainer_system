import styled from 'styled-components'
import { Link } from "react-router-dom";

export const MenuList = styled.ul`
    display: flex;
    gap: 5px;
    justify-content: center;
    list-style: none;
    padding: 5px 0px;
`
export const MenuItem = styled.li`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 300px;
    height: 30px;
    background-color: #5d6f98;
    color: white;
    border-radius: 20px;
    cursor: pointer;
`

export const StyledLink = styled(Link)`
    color: white;
    width: 100%;
    text-align: center;
    text-decoration: none;
`