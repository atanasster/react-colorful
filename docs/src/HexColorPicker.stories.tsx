import React, { useState } from "react";
import { Document, Example } from "@component-controls/core";
import { HexColorPicker } from "../../src/components/HexColorPicker";
import { ColorLabel } from "../components/ColorLabel";

export default {
  title: "Components/HexColorPicker",
  component: HexColorPicker,
  order: 0,
} as Document;

export const Overview: Example = () => {
  const [color, setColor] = useState("#990000");
  return (
    <>
      <HexColorPicker color={color} onChange={setColor} />
      <ColorLabel color={color} />
    </>
  );
};
