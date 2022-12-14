import styled from "styled-components";

export const SHome = styled.div`
  margin-top: 100px;
  .document-tabs {
    display: flex;
    justify-content: end;
    button {
      padding: 10px 20px;
      border: 1px solid #121212;
      background-color: #1e1e1e;
      margin-left: 15px;
      &:active{
        opacity: .8;
      }
    }
  }
  .document-wrapper {
    padding: 36px;
    background-color: #1e1e1e;
  }
`;
