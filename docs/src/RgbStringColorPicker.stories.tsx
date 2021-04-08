import React, { useState } from "react";
import { Document, Example } from "@component-controls/core";
import { RgbStringColorPicker } from "../../src/components/RgbStringColorPicker";
import { ColorLabel } from "../components/ColorLabel";

export default {
  title: "Components/RgbStringColorPicker",
  component: RgbStringColorPicker,
  order: 2,
} as Document;

export const Overview: Example = () => {
  const [color, setColor] = useState("rgb(213, 50, 16)");
  return (
    <>
      <RgbStringColorPicker color={color} onChange={setColor} />
      <ColorLabel color={color} />
    </>
  );
};
