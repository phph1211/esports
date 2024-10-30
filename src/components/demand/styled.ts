import styled from "styled-components";

export const DemandWrapper = styled.div`
  padding: 20px;
  height: 160px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const DemandText = styled.p`
  font-size: 35px;
  font-weight: bold;
  margin: 0;
`;

export const DemandInput = styled.input`
  width: 100%;
  border-width: 0 0 1px;
  font-size: 18px;
  &:focus {
    outline: none;
  }
`;

export const TextBox = styled.div``;
