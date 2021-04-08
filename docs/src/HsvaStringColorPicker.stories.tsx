import React, { useState } from "react";
import { Document, Example } from "@component-controls/core";
import { HsvaStringColorPicker } from "../../src/components/HsvaStringColorPicker";
import { ColorLabel } from "../components/ColorLabel";

export default {
  title: "Components/HsvaStringColorPicker",
  component: HsvaStringColorPicker,
  order: 12,
} as Document;

export const Overview: Example = () => {
  const [color, setColor] = useState("hsv(1, 96%, 97%, 0.2)");
  return (
    <>
      <HsvaStringColorPicker color={color} onChange={setColor} />
      <ColorLabel color={color} />
    </>
  );
};
