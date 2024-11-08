import React from "react";
import { useLocation } from "react-router-dom";
import checkIcon from "./sibal.png";

export const FinishPage: React.FC = () => {
  const location = useLocation();
  const studentInfo = location.state?.studentInfo || {
    school: "정보없음",
    studentNumber: "정보없음",
    name: "정보없음",
  };

  const getSchoolName = (schoolCode: string) => {
    switch (schoolCode) {
      case "HANSEI":
        return "한세사이버보안고등학교";
      case "SEMYEONG":
        return "세명컴퓨터고등학교";
      default:
        return "정보없음";
    }
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          marginBottom: "3em",
        }}
      >
        <img
          style={{ width: 100, marginBottom: 10 }}
          src={checkIcon}
          alt="check icon"
        />

        <p style={{ fontSize: 20, fontWeight: "bold", margin: 0 }}>
          학교: {getSchoolName(studentInfo.school)}
        </p>
        <p style={{ fontSize: 20, fontWeight: "bold", margin: 0 }}>
          학번: {studentInfo.studentNumber}
        </p>
        <p style={{ fontSize: 20, fontWeight: "bold", margin: 0 }}>
          이름: {studentInfo.name}
        </p>
        <p
          style={{
            fontSize: 27,
            marginTop: "30px",
            fontWeight: "bold",
          }}
        >
          접수가 완료되었습니다!
        </p>
      </div>
    </div>
  );
};
