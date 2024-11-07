import styled from "styled-components";

export interface HeaderTextStyleProps {
  hasGoBackIcon?: boolean;
}

export const HeaderWrapper = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 25px 0 0 0;
  text-align: center;
  position: sticky;
`;

export const HeaderText = styled.p<HeaderTextStyleProps>`
  font-size: 20px;
  font-weight: bold;
  margin: 0;
  text-align: center;
  margin-right: ${(props) => (props.hasGoBackIcon ? "25px" : "0px")};
`;

export const DescriptionText = styled.span`
  display: block;
  font-size: 14px;
  color: #666;
`;

export const dummyData = styled.div``;
