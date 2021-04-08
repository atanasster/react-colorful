import React, { useState } from "react";
import { Document, Example } from "@component-controls/core";
import { RgbaColorPicker } from "../../src/components/RgbaColorPicker";
import { ColorLabel } from "../components/ColorLabel";

export default {
  title: "Components/RgbaColorPicker",
  component: RgbaColorPicker,
  order: 3,
} as Document;

export const Overview: Example = () => {
  const [color, setColor] = useState({
    r: 213,
    g: 50,
    b: 16,
    a: 0.2,
  });
  return (
    <>
      <RgbaColorPicker color={color} onChange={setColor} />
      <ColorLabel color={color} />
    </>
  );
};
