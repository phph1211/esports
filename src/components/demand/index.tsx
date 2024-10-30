import React from "react";
import * as S from "./styled";

export interface DemandProps {
  text1: string;
  text2: string;
}

export const Demand: React.FC<DemandProps> = ({ text1, text2 }) => {
  return (
    <S.DemandWrapper>
      <S.TextBox>
        <S.DemandText>{text1}</S.DemandText>
        <S.DemandText>{text2}</S.DemandText>
      </S.TextBox>

      <S.DemandInput type="text" placeholder="학교명" />
    </S.DemandWrapper>
  );
};
