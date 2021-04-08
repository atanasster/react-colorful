import React, { useState } from "react";
import { Document, Example } from "@component-controls/core";

import { HexColorInput } from "../../src/components/HexColorInput";
export default {
  title: "Input/HexColorInput",
  component: HexColorInput,
  description: "Input control to enter hexadecimal color values",
} as Document;

export const Overview: Example = () => {
  const [color, setColor] = useState("#990000");
  return <HexColorInput color={color} onChange={setColor} />;
};
