import React from "react";
import styles from "./SliderFooter.module.css";
import Button from "../../Button/Button";
import SliderDots from "./SliderDots/SliderDots";

export default function SliderFooter({
  sliderInfo,
  currentSlide,
  toggleSlider,
}) {
  const sliderIds = sliderInfo.map((slider) => slider._id);
  const isPrevButtonDisabled = sliderIds.indexOf(currentSlide) === 0;
  const showDone = currentSlide === sliderInfo[sliderInfo.length - 1]._id;

  const currentSlideIndex = sliderIds.indexOf(currentSlide);

  return (
    <div className={styles.sliderFooter}>
      <Button
        type='link'
        disabled={isPrevButtonDisabled}
        onClick={() => {
          toggleSlider(sliderIds[currentSlideIndex - 1]);
        }}
      >
        BACK
      </Button>
      <SliderDots
        sliderInfo={sliderInfo}
        currentSlide={currentSlide}
        toggleSlider={toggleSlider}
      />
      {showDone ? (
        <Button type='link'>DONE</Button>
      ) : (
        <Button
          type='link'
          onClick={() => {
            toggleSlider(sliderIds[currentSlideIndex + 1]);
          }}
        >
          NEXT
        </Button>
      )}
    </div>
  );
}
