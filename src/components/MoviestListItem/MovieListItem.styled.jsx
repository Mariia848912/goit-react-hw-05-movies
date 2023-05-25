import styled from 'styled-components';

export const Item = styled.li`
  &:not(:last-child) {
    margin-bottom: 5px;
  }
  &:active {
    color: #b92f2c;
  }
`;
