import styled from 'styled-components';

export const FormContainer = styled.form`
  div{
    border: 1px solid black;
    padding: 10px;
  }
  label {
    display: block;
    margin-bottom: 5px;
  }
  input {
    display: block;
    width: 200px;
    padding: 5px;
    border: 1px solid #ddd;
    border-radius: 5px;
    margin-bottom: 10px;
  }
  button {
    border: 1px solid #ddd;
    background-color: white;
    color: black;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  button:hover {
    background-color: blue;
  }
`;