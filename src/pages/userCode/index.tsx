import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Header } from "../../components/header";
import { Demand } from "../../components/demand";
import useDeviceType from "../../hook/useDeviceType";
import * as S from "../styled";

export const UserCodePage: React.FC = () => {
  const [inputValue, setInputValue] = useState("");
  const [isEmpty, setIsEmpty] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();
  const { userSchool } = location.state || {};
  const { isIOS } = useDeviceType();

  useEffect(() => {
    setIsEmpty(!inputValue);
  }, [inputValue]);

  const handleSubmit = () => {
    if (isEmpty) {
      alert("학번을 입력해주세요.");
    } else {
      navigate("/userName", {
        state: { userSchool, userStudentNumber: inputValue },
      });
    }
  };

  return (
    <S.PageLayout>
      <S.Container>
        <Header
          endPoint="/"
          title="HANSEI X SEMYEONG"
          hasGoBackIcon={true}
          description="Esports"
        />
        <Demand
          isSchool={false}
          text1="학번을 알려주세요"
          placeholder="ex) C2110"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </S.Container>
      <div style={{ flex: 2 }}></div>
      <button
        type="button"
        onClick={handleSubmit}
        style={{
          marginBottom: isIOS ? 100 : 0,
          border: "none",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "90%",
          backgroundColor: "#4785fa",
          color: "white",
          fontWeight: "bold",
          fontSize: 18,
          height: 60,
          borderRadius: 18,
          textDecoration: "none",
          margin: "0 auto 30px auto",
        }}
        disabled={isEmpty}
      >
        다음으로
      </button>
    </S.PageLayout>
  );
};
