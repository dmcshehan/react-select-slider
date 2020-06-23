import React, { useState } from "react";
import MainFocus from "./Slides/MainFocus/MainFocus";

import focusesArr from "../../Api/focuses.json";

export default function index() {
  const [selectedSlideValues, setSelectedSlideValues] = useState({
    mainFocus: null,
    anotherSlide: null, //another example slide like main focus
  });

  function onSelect(selected) {
    setSelectedSlideValues({
      ...selectedSlideValues,
      [selected.slider]: selected._id,
    });
  }

  return (
    <div>
      <MainFocus
        data={focusesArr}
        selected={selectedSlideValues.mainFocus}
        onSelect={onSelect}
      />
    </div>
  );
}
