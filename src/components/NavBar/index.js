import React from "react";
import { MenuItem, MenuList, StyledLink } from "./styles";

export const NavBar = () => {
  return (
    <nav>
      <MenuList>
        <MenuItem>
          <StyledLink to='hola'>Dashboard</StyledLink>
        </MenuItem>
        <MenuItem>
          <StyledLink to='chao'>List</StyledLink>
        </MenuItem>
        <MenuItem>
          <StyledLink to='hola'>MNT</StyledLink>
        </MenuItem>
      </MenuList>
    </nav>
  );
};
