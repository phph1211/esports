import React, { useEffect } from "react";
import * as S from "./styled";
import { MdArrowBackIos } from "react-icons/md";
import { Link } from "react-router-dom";

export interface HeaderProps {
  title: string;
  hasGoBackIcon?: boolean;
  endPoint?: string;
  description?: string;
}

useEffect(() => {
  const handleBlur = () => {
    window.scrollTo(0, 0);
  };

  window.addEventListener("blur", handleBlur);

  return () => {
    window.removeEventListener("blur", handleBlur);
  };
}, []);

export const Header: React.FC<HeaderProps> = ({
  title,
  hasGoBackIcon = false,
  description,
  endPoint = "",
}) => {
  return (
    <S.HeaderWrapper style={{ fontFamily: "sans-serif" }}>
      {hasGoBackIcon ? (
        <Link to={endPoint || "/"}>
          <MdArrowBackIos color="gray" style={{ fontSize: 25 }} />
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
