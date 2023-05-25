import styled from 'styled-components';

export const List = styled.ul`
    margin-top: 12px;
    margin-left: 32px;
`
export const Item = styled.li`
   &:not(:last-child){
    margin-bottom: 16px;
   }
`

export const Name = styled.p`
font-weight: 600;
margin-bottom: 12px;;
`