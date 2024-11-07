import React, { useState, useEffect } from "react";
import * as S from "./styled";
import useDeviceType from "../../hook/useDeviceType";

export interface DemandProps {
  text1: string;
  text2?: string;
  placeholder: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isSchool?: boolean;
  errorCode?: any;
  isStudentCodePage?: boolean;
}

export const Demand: React.FC<DemandProps> = ({
  text1,
  text2,
  placeholder,
  value,
  onChange,
  isSchool,
  errorCode,
  isStudentCodePage,
}) => {
  const [inputValue, setInputValue] = useState(value || "");
  const [warning, setWarning] = useState("");
  const [warning2, setWarning2] = useState("");
  const [isAutoCompleted, setIsAutoCompleted] = useState(false);

  const { isIOS } = useDeviceType();

  const sanitizeInput = (value: string) => {
    return value.replace(/[;'"\-/*#]/g, "");
  };

  useEffect(() => {
    if (errorCode) {
      setWarning(
        isStudentCodePage === true
          ? "학번과 이름은 반드시 공백으로 구분해주세요"
          : errorCode
      );
      setWarning2("ex) 한세사이버보안고등학교 | 세명컴퓨터고등학교");
    }
  }, [errorCode]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let newValue = sanitizeInput(e.target.value);

    if (isSchool && !isAutoCompleted) {
      if (newValue === "한세") {
        newValue = "한세사이버보안고등학교";
        setIsAutoCompleted(true);
      } else if (newValue === "세명") {
        newValue = "세명컴퓨터고등학교";
        setIsAutoCompleted(true);
      }
    }

    if (
      isSchool &&
      newValue !== "세명컴퓨터고등학교" &&
      newValue !== "한세사이버보안고등학교"
    ) {
      setWarning(errorCode || "학교 이름을 정확히 입력해주세요");
      setWarning2("ex) 한세사이버보안고등학교 | 세명컴퓨터고등학교");
    } else {
      setWarning("");
      setWarning2("");
    }

    setInputValue(newValue);
    if (onChange) onChange({ ...e, target: { ...e.target, value: newValue } });

    if (newValue === "" && isSchool) {
      setIsAutoCompleted(false);
    }
  };

  return (
    <S.DemandWrapper>
      <S.TextBox>
        <S.DemandText style={{ marginTop: 10 }}>{text1}</S.DemandText>
        <S.DemandText>{text2}</S.DemandText>
      </S.TextBox>

      <S.DemandInput
        required
        type="text"
        placeholder={placeholder}
        value={inputValue}
        onChange={handleChange}
      />
      {warning && (
        <>
          <S.WarningText>{warning}</S.WarningText>
          <S.WarningText style={{ margin: 0 }}>{warning2}</S.WarningText>
        </>
      )}

      {isStudentCodePage ? (
        <S.WarningText>
          학번과 이름은 <strong style={{ fontWeight: 900 }}>반드시</strong>{" "}
          공백으로 구분해주세요
        </S.WarningText>
      ) : (
        ""
      )}
    </S.DemandWrapper>
  );
};
