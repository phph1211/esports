import styled from "styled-components";
import { Link } from "react-router-dom";

export const LinkButton = styled(Link)`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 60px;
  border-radius: 18px;
  background-color: #4785fa;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 30px;
  text-decoration: none;
`;
