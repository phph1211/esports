import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "../../components/header";
import { LinkButton } from "../../components/Linkbutton";
import { Demand } from "../../components/demand";
import useDeviceType from "../../hook/useDeviceType";
import * as S from "../styled";

export const UserSchoolPage: React.FC = () => {
  const [inputValue, setInputValue] = useState("");
  const [isEmpty, setIsEmpty] = useState(true);
  const [errorCode, setErrorCode] = useState("");
  const navigate = useNavigate();
  const { isIOS } = useDeviceType();

  useEffect(() => {
    setIsEmpty(!inputValue);
  }, [inputValue]);

  const handleClick = () => {
    if (isEmpty) {
      setErrorCode("학교 이름을 입력하세요");
    } else {
      navigate("/userCode", { state: { userSchool: inputValue } });
    }
  };

  return (
    <S.PageLayout>
      <S.Container>
        <Header title="HANSEI X SEMYEONG" description="Esports" />
        <Demand
          errorCode={errorCode}
          isSchool={true}
          text1="현재 재학중인"
          text2="학교를 알려주세요"
          placeholder="ex) 한세사이버보안고등학교"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </S.Container>
      <div style={{ flex: 2 }}></div>
      <button
        onClick={handleClick}
        style={{
          position: "fixed",
          bottom: 0,
          marginBottom: isIOS ? 80 : 0,
          border: "none",
          backgroundColor: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "90%",
        }}
      >
        <LinkButton isAble={!isEmpty} text="다음으로" endPoint={"userCode"} />
      </button>
    </S.PageLayout>
  );
};
