import React, { useState } from "react";
import { Document, Example } from "@component-controls/core";
import { RgbColorPicker } from "../../src/components/RgbColorPicker";
import { ColorLabel } from "../components/ColorLabel";

export default {
  title: "Components/RgbColorPicker",
  component: RgbColorPicker,
  order: 1,
} as Document;

export const Overview: Example = () => {
  const [color, setColor] = useState({
    r: 213,
    g: 50,
    b: 16,
  });
  return (
    <>
      <RgbColorPicker color={color} onChange={setColor} />
      <ColorLabel color={color} />
    </>
  );
};
