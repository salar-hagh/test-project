import styled from "styled-components";

export const SDocument = styled.div`
  padding: 8px;
  background-color: #121212;
  margin-bottom: 16px;
  padding-right: 40px;

  position: relative;

  .document-body {
    p {
      color: #a2a2a2;
    }
  }

  .state-wrapper {
    position: absolute;
    right: 0;
    top: 0;
    width: 40px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
