import React from "react";
import SelectBox from "../../../SelectBox/SelectBox";
import SlideBodyContainer from "./SlideBodyContainer/SlideBodyContainer";

export default function SlideBody({ options, onBoxSelect, selected }) {
  const selectBoxes = options.map((option) => (
    <SelectBox
      selected={selected}
      key={option._id}
      style={{ flexBasis: "46%" }}
      onClick={() => onBoxSelect(option._id)}
      {...option}
    />
  ));
  return <SlideBodyContainer>{selectBoxes}</SlideBodyContainer>;
}
