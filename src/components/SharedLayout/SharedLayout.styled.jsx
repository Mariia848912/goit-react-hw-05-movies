import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 2;
  background-color: #fff;
  box-shadow: 0 5px 5px -5px rgba(0, 0, 0, 0.3);
`;

export const NavList = styled.nav`
  display: flex;
  margin-left: 35px;
  &:not(:last-child) {
    margin-right: 50px;
  }
`;
export const Link = styled(NavLink)`
  display: block;
  padding: 16px 10px;
  text-decoration: none;
  font-weight: 500;
  color: #000;

  &.active {
    color: #b92f2c;
  }
  &:hover,
  &:focus {
    text-decoration: underline;
  }
`;
