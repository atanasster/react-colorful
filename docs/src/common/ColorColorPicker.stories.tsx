import React, { useState } from "react";
import { Document, Example } from "@component-controls/core";
import { ColorLabel } from "../../components/ColorLabel";
import { ColorPicker } from "../../../src/components/common/ColorPicker";
import { ColorModel, RgbColor } from "../../../src/types";
import { equalHex, equalColorObjects } from "../../../src/utils/compare";
import {
  hexToHsva,
  hsvaToHex,
  rgbaToHsva,
  hsvaToRgba,
  rgbaToRgb,
} from "../../../src/utils/convert";

export default {
  title: "Common/ColorPicker",
  component: ColorPicker,
} as Document;

export const hex: Example = () => {
  const [color, setColor] = useState("#dd4455");
  const colorModel: ColorModel<string> = {
    defaultColor: "000",
    toHsva: hexToHsva,
    fromHsva: hsvaToHex,
    equal: equalHex,
  };
  return (
    <>
      <ColorPicker<string> colorModel={colorModel} color={color} onChange={setColor} />
      <ColorLabel color={color} />
    </>
  );
};

export const rgb: Example = () => {
  const [color, setColor] = useState({ r: 154, g: 22, b: 192 });
  const colorModel: ColorModel<RgbColor> = {
    defaultColor: { r: 0, g: 0, b: 0 },
    toHsva: ({ r, g, b }) => rgbaToHsva({ r, g, b, a: 1 }),
    fromHsva: (hsva) => rgbaToRgb(hsvaToRgba(hsva)),
    equal: equalColorObjects,
  };
  return (
    <>
      <ColorPicker<RgbColor> colorModel={colorModel} color={color} onChange={setColor} />
      <ColorLabel color={color} />
    </>
  );
};
