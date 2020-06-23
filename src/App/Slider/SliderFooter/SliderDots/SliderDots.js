import React from "react";
import styles from "./SliderDots.module.css";
import SliderDot from "./SliderDot/SliderDot";

export default function SliderDots({ sliderInfo, currentSlide, toggleSlider }) {
  const sliderLength = sliderInfo.length;

  const dots = sliderInfo.map(({ ...slideInfo }, index) => {
    return (
      <SliderDot
        key={slideInfo._id}
        active={currentSlide === slideInfo._id}
        onClick={() => {
          toggleSlider(slideInfo._id);
        }}
      />
    );
  });
  return <div className={styles.sliderDots}>{dots}</div>;
}
