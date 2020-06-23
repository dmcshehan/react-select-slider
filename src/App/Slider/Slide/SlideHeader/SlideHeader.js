import React from "react";
import MainTitle from "../../../Titles/MainTitle/MainTitle";
import SubTitle from "../../../Titles/SubTitle/SubTitle";
import HeaderContainer from "../../../HeaderContainer/HeaderContainer";

export default function SlideHeader({ title, subTitle }) {
  return (
    <HeaderContainer>
      <MainTitle style={{ color: "#283154" }}>{title}</MainTitle>
      <SubTitle style={{ marginTop: 10 }}>{subTitle}</SubTitle>
    </HeaderContainer>
  );
}
