import styled from '@emotion/styled'
import { Form, Field, ErrorMessage } from 'formik';
export const StyledForm = styled(Form)`
margin: 10px 0;
  width: 500px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  padding: 20px;
`;

export const InputEl = styled(Field)`
  padding: 5px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  &:hover,
  :focus {
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.4);
    border-color: lightgray;
  }
  &:hover,
  &:focus {
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);
    outline: none;
    &:hover {
      background-color: lightgray;
    }
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  width: 200px;
  margin-bottom: 10px;
`;

export const AddContactBtn = styled.button`
  padding: 7px;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  &:hover,
  :focus {
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.4);
    border-color: lightblue;
  }
  &:hover,
  &:focus {
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.4);
    outline: none;
    &:hover {
      background-color: lightblue;
    }
  }
`;

export const StyledError = styled(ErrorMessage)`
color: red;
`