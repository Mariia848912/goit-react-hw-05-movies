import styled from 'styled-components';
import { Form, Field } from 'formik';

export const SearchForm = styled(Form)`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 400px;
  background-color: #fff;
  overflow: hidden;
`;

export const Input = styled(Field)`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 16px;
  border: solid 1.5px #afb1b8;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;

  height: 30px;
  &:focus {
    border: solid 1.5px #188ce8;
  }
`;

export const Button = styled.button`
  display: inline-block;
  height: 30px;
  border: solid 1.5px #afb1b8;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;

  &:hover {
    opacity: 1;
  }
`;
