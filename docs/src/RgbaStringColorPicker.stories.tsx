import React, { useState } from "react";
import { Document, Example } from "@component-controls/core";
import { RgbaStringColorPicker } from "../../src/components/RgbaStringColorPicker";
import { ColorLabel } from "../components/ColorLabel";

export default {
  title: "Components/RgbaStringColorPicker",
  component: RgbaStringColorPicker,
  order: 4,
} as Document;

export const Overview: Example = () => {
  const [color, setColor] = useState("rgb(213, 50, 16, 0.2)");
  return (
    <>
      <RgbaStringColorPicker color={color} onChange={setColor} />
      <ColorLabel color={color} />
    </>
  );
};
