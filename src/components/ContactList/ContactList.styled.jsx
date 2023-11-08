import styled from 'styled-components';

export const List = styled.div`
  ul {
    padding: 0;
  }
  li {
    margin-bottom: 10px;
    align-items: center;
  }
  .btn-close {
    margin-left: 10px;
    border-radius: 5px;
    cursor: pointer;
    border: 1px solid #ddd;
    background-color: white;
    color: black;
    transition: background-color 0.3s;
  }

  .btn-close:hover {
    background-color: blue;
  }
`;