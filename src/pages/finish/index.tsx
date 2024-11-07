import React from "react";
import { useLocation } from "react-router-dom";
import checkIcon from "./sibal.png";

export const FinishPage: React.FC = () => {
  const location = useLocation();
  const studentInfo = location.state?.studentInfo || "정보없음";

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
      <img style={{ width: 100, marginBottom: 10 }} src={checkIcon} />

      <p style={{ fontSize: 20, fontWeight: "bold", margin: 0 }}>
        {studentInfo}
      </p>
      <p
        style={{
          fontSize: 27,
          marginBottom: 30,
          fontWeight: "bold",
          margin: 0,
        }}
      >
        접수가 완료되었습니다!
      </p>
    </div>
  );
};
