import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Section = styled.section`
  padding-top: 15px;
`;
export const Box = styled.div`
  display: flex;
  gap: 12px;
  box-shadow: 0 5px 5px -5px rgba(0, 0, 0, 0.3);
`;
export const Img = styled.img`
  margin-bottom: 12px;
`;
export const AboutMovie = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
export const BoxMoreInfo = styled.div`
  padding: 18px 0px;
  margin-bottom: 12px;
  box-shadow: 0 5px 5px -5px rgba(0, 0, 0, 0.3);
`;
export const StyledLink = styled(Link)`
  display: block;
  padding: 4px 0;
`;
export const ListLink = styled.ul`
  margin-top: 12px;
  margin-left: 32px;
`;
