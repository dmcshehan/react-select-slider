import React from "react";
import SlideHeader from "./SlideHeader/SlideHeader";
import SlideBody from "./SlideBody/SlideBody";

import styles from "./Slide.module.css";

export default function Slide({
  options,
  _id,
  onSelect,
  isCurrentSlide,
  ...props
}) {
  return (
    <div className={`${styles.hide} ${isCurrentSlide ? styles.show : ""}`}>
      <SlideHeader {...props} />
      <SlideBody
        {...props}
        options={options}
        onBoxSelect={(optionId) => {
          onSelect({ optionId, sliderId: _id });
        }}
      />
    </div>
  );
}
