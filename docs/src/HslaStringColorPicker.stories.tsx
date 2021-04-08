import React, { useState } from "react";
import { Document, Example } from "@component-controls/core";
import { HslaStringColorPicker } from "../../src/components/HslaStringColorPicker";
import { ColorLabel } from "../components/ColorLabel";

export default {
  title: "Components/HslaStringColorPicker",
  component: HslaStringColorPicker,
  order: 8,
} as Document;

export const Overview: Example = () => {
  const [color, setColor] = useState("hsla(213, 50%, 16%, 0.5");
  return (
    <>
      <HslaStringColorPicker color={color} onChange={setColor} />
      <ColorLabel color={color} />
    </>
  );
};
