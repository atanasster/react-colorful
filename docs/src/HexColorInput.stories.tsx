import React, { FC, useState } from "react";

import { HexColorInput } from "../../src/components/HexColorInput";
export default {
  title: "Input/HexColorInput",
  component: HexColorInput,
  description: "Input control to enter hexadecimal color values",
};

export const overview = () => {
  const [color, setColor] = useState("#990000");
  return <HexColorInput color={color} onChange={setColor} />;
};
