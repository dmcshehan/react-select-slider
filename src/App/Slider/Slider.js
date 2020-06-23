import React, { useState } from "react";
import Slide from "./Slide/Slide";
import SliderFooter from "./SliderFooter/SliderFooter";
import styles from "./Slider.module.css";

import sliderInfo from "../../api/sliders";

const initialSelectedSlideOptions = {};

sliderInfo.forEach((slider) => {
  initialSelectedSlideOptions[slider._id] = null;
});

export default function index() {
  const [selectedSlideOptions, setSelectedSlideOptions] = useState(
    initialSelectedSlideOptions
  );

  const [currentSlide, setCurrentSlide] = useState(sliderInfo[0]._id);

  function onSelect({ sliderId, optionId }) {
    setSelectedSlideOptions({
      ...selectedSlideOptions,
      [sliderId]: optionId,
    });
  }

  const slides = sliderInfo.map((slide) => (
    <Slide
      key={slide._id}
      {...slide}
      onSelect={onSelect}
      selected={selectedSlideOptions[slide._id]}
      isCurrentSlide={currentSlide === slide._id}
    />
  ));

  function toggleSlider(slide) {
    setCurrentSlide(slide);
  }

  return (
    <div className={styles.slider}>
      {slides}
      <SliderFooter
        currentSlide={currentSlide}
        sliderInfo={sliderInfo}
        toggleSlider={toggleSlider}
      />
    </div>
  );
}
