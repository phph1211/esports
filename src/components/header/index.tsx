import React from "react";
import * as S from "./styled";
import { MdArrowBackIos } from "react-icons/md";

export interface HeaderProps {
  title: string;
  hasGoBackIcon?: boolean;
  description?: string;
}

export const Header: React.FC<HeaderProps> = ({
  title,
  hasGoBackIcon,
  description,
}) => {
  return (
    <S.HeaderWrapper>
      {hasGoBackIcon === true ? (
        <MdArrowBackIos style={{ fontSize: 25 }} />
      ) : null}
      <S.HeaderText>
        {title}
        {description ? <S.HeaderText>{description}</S.HeaderText> : ""}
      </S.HeaderText>
      {hasGoBackIcon === true ? <div></div> : null}
    </S.HeaderWrapper>
  );
};
