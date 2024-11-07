import styled from "styled-components";

export const DemandWrapper = styled.div`
  padding: 20px;
  height: 160px;
  display: flex;
  flex-direction: column;
  margin-top: 6em;
`;

export const DemandText = styled.p`
  font-size: 2em;
  font-weight: bold;
  margin: 0;
`;

export const DemandInput = styled.input`
  margin-top: 50px;
  width: 100%;
  border-width: 0 0 1px;
  font-size: 18px;
  &:focus {
    outline: none;
  }
`;

export const TextBox = styled.div``;

export const WarningText = styled.p`
  color: red;
  margin: 0;
  margin-top: 10px;
`;
