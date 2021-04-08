import React, { useState } from "react";
import { Document, Example } from "@component-controls/core";
import { HslaColorPicker } from "../../src/components/HslaColorPicker";
import { ColorLabel } from "../components/ColorLabel";

export default {
  title: "Components/HslaColorPicker",
  component: HslaColorPicker,
  order: 7,
} as Document;

export const Overview: Example = () => {
  const [color, setColor] = useState({
    h: 213,
    s: 50,
    l: 16,
    a: 0.5,
  });
  return (
    <>
      <HslaColorPicker color={color} onChange={setColor} />
      <ColorLabel color={color} />
    </>
  );
};
