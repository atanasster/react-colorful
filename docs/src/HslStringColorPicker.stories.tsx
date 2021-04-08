import React, { useState } from "react";
import { Document, Example } from "@component-controls/core";
import { HslStringColorPicker } from "../../src/components/HslStringColorPicker";
import { ColorLabel } from "../components/ColorLabel";

export default {
  title: "Components/HslStringColorPicker",
  component: HslStringColorPicker,
  order: 6,
} as Document;

export const Overview: Example = () => {
  const [color, setColor] = useState("hsl(213, 50%, 16%");
  return (
    <>
      <HslStringColorPicker color={color} onChange={setColor} />
      <ColorLabel color={color} />
    </>
  );
};
