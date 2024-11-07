import React from "react";
import * as S from "./styled";
import { MdArrowBackIos } from "react-icons/md";
import { Link } from "react-router-dom";

export interface HeaderProps {
  title: string;
  hasGoBackIcon?: boolean;
  endPoint?: string;
  description?: string;
}

export const Header: React.FC<HeaderProps> = ({
  title,
  hasGoBackIcon = false,
  description,
  endPoint = "",
}) => {
  return (
    <S.HeaderWrapper>
      {hasGoBackIcon ? (
        <Link to={endPoint || "/"}>
          <MdArrowBackIos style={{ fontSize: 25 }} />
        </Link>
      ) : null}
      <S.HeaderText hasGoBackIcon={hasGoBackIcon}>
        {title}
        {description ? (
          <S.DescriptionText>{description}</S.DescriptionText>
        ) : null}
      </S.HeaderText>
      {hasGoBackIcon ? <div></div> : null}
    </S.HeaderWrapper>
  );
};
