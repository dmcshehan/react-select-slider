import React, { useState } from "react";
import MainFocusHeader from "./MainFocusHeader/MainFocusHeader";
import SliderBody from "../../SliderBody/SliderBody";

export default function MainFocus({ onSelect, ...props }) {
  return (
    <div>
      <MainFocusHeader />
      <SliderBody
        {...props}
        onBoxSelect={(_id) => {
          onSelect({
            slider: "mainFocus",
            _id,
          });
        }}
      />
    </div>
  );
}
