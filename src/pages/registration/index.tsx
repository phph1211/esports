import React from "react";
import { Header } from "../../components/header";
import { Button } from "../../components/button";
import { Demand } from "../../components/demand";

export const RegisterationPage: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100vh",
      }}
    >
      <div
        style={{
          width: "100%",
          flex: 1.5,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Header
          title="HANSEI X SEMYEONG"
          hasGoBackIcon={true}
          description="Esports"
        />
        <Demand text1="현재 재학중인" text2="학교를 알려주세요" />
      </div>
      <div style={{ flex: 2 }}></div>
      <Button />
    </div>
  );
};
