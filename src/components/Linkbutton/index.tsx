import React from "react";
import * as S from "./styled";

export interface LinkButton {
  endPoint: string;
  text: string;
  isAble: boolean;
}
export const LinkButton: React.FC<LinkButton> = ({
  endPoint,
  text,
  isAble,
}) => {
  if (!isAble) {
    endPoint = "";
  }
  return (
    <S.LinkButton to={endPoint}>
      <p>{text}</p>
    </S.LinkButton>
  );
};
