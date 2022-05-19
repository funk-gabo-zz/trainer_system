import React from "react";
import { MenuItem, MenuList, StyledLink } from "./styles";

export const NavBar = () => {
  return (
    <nav>
      <MenuList>
        <MenuItem>
          <StyledLink to='/'>Dashboard</StyledLink>
        </MenuItem>
        <MenuItem>
          <StyledLink to='/list'>List</StyledLink>
        </MenuItem>
        <MenuItem>
          <StyledLink to='/mnt'>MNT</StyledLink>
        </MenuItem>
      </MenuList>
    </nav>
  );
};
