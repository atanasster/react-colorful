import React, { useState } from "react";
import { Document, Example } from "@component-controls/core";
import { HsvaColorPicker } from "../../src/components/HsvaColorPicker";
import { ColorLabel } from "../components/ColorLabel";

export default {
  title: "Components/HsvaColorPicker",
  component: HsvaColorPicker,
  order: 11,
} as Document;

export const Overview: Example = () => {
  const [color, setColor] = useState({
    h: 213,
    s: 50,
    v: 50,
    a: 0.2,
  });
  return (
    <>
      <HsvaColorPicker color={color} onChange={setColor} />
      <ColorLabel color={color} />
    </>
  );
};
