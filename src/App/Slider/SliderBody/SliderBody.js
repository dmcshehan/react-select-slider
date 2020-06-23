import React from "react";
import SliderBodyContainer from "./SliderBodyContainer/SliderBodyContainer";
import SelectBox from "../../SelectBox/SelectBox";

export default function SliderBody({ data, onBoxSelect, ...props }) {
  const selectBoxes = data.map((item) => (
    <SelectBox
      key={item._id}
      style={{ flexBasis: "46%" }}
      onClick={() => onBoxSelect(item._id)}
      {...props}
      {...item}
    />
  ));
  return <SliderBodyContainer>{selectBoxes}</SliderBodyContainer>;
}
