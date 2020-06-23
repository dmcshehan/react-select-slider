import React from "react";
import MainTitle from "../../../../Titles/MainTitle/MainTitle";
import SubTitle from "../../../../Titles/SubTitle/SubTitle";
import HeaderContainer from "../../../../HeaderContainer/HeaderContainer";

export default function Header() {
  return (
    <HeaderContainer>
      <MainTitle style={{ color: "#283154" }}>
        What are your main <br />
        areas of focus?
      </MainTitle>
      <SubTitle style={{ marginTop: 10 }}>
        This will help us to build a personalized experience for you
      </SubTitle>
    </HeaderContainer>
  );
}
