import React, { useState } from "react";
import { Document, Example } from "@component-controls/core";
import { HsvStringColorPicker } from "../../src/components/HsvStringColorPicker";
import { ColorLabel } from "../components/ColorLabel";

export default {
  title: "Components/HsvStringColorPicker",
  component: HsvStringColorPicker,
  order: 10,
} as Document;

export const Overview: Example = () => {
  const [color, setColor] = useState("hsv(1, 96%, 97%)");
  return (
    <>
      <HsvStringColorPicker color={color} onChange={setColor} />
      <ColorLabel color={color} />
    </>
  );
};
