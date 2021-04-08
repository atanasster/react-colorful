import React, { useState } from "react";
import { Document, Example } from "@component-controls/core";
import { ColorLabel } from "../../components/ColorLabel";
import { Saturation } from "../../../src/components/common/Saturation";

export default {
  title: "Common/Saturation",
  component: Saturation,
} as Document;

export const Overview: Example = () => {
  const [color, setColor] = useState({
    s: 50,
    v: 50,
  });
  return (
    <>
      <Saturation hsva={{ a: 0.5, h: 213, s: color.s, v: color.v }} onChange={setColor} />
      <ColorLabel color={color} />
    </>
  );
};
