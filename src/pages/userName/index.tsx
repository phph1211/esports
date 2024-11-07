import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import { Header } from "../../components/header";
import { Demand } from "../../components/demand";
import useDeviceType from "../../hook/useDeviceType";
import * as S from "../styled";

export const UserNamePage: React.FC = () => {
  const [inputValue, setInputValue] = useState("");
  const [isEmpty, setIsEmpty] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();
  const { userSchool, userStudentNumber } = location.state || {};
  const { isIOS } = useDeviceType();

  useEffect(() => {
    setIsEmpty(!inputValue);
  }, [inputValue]);

  const handleSubmit = async () => {
    if (isEmpty) {
      alert("이름을 입력해주세요.");
      return;
    }

    try {
      const response = await axios.post(
        "https://esports.hanum.us/luckydraw/getDraw",
        {
          school: userSchool,
          studentNumber: userStudentNumber,
          name: inputValue,
        }
      );

      if (response.data.message === "SUCCESS") {
        navigate("/finish", {
          state: {
            studentInfo: {
              school: userSchool,
              studentNumber: userStudentNumber,
              name: inputValue,
            },
          },
        });
      }
    } catch (error) {
      console.error("POST 요청 실패:", error);
      alert("서버에 데이터를 전송할 수 없습니다. 다시 시도해주세요.");
      console.log(userSchool, userStudentNumber, inputValue);
    }
  };

  return (
    <S.PageLayout>
      <S.Container>
        <Header
          endPoint="/userCode"
          title="HANSEI X SEMYEONG"
          hasGoBackIcon={true}
          description="Esports"
        />
        <Demand
          isSchool={false}
          text1="이름을 입력해주세요"
          placeholder="ex) 홍길동"
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
        제출하기
      </button>
    </S.PageLayout>
  );
};
