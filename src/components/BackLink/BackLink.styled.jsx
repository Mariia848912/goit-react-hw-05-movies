import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  border: 1px solid #afb1b8;
  border-radius: 3px;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 6px 6px;
  color: #000;
  text-decoration: none;
  font-weight: 300;
  font-size: 12px;

  &:hover,
  &:focus {
    color: #b92f2c;
    border: 1px solid #b92f2c;
  }
`;
