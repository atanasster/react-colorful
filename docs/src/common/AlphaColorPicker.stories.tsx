import React, { useState } from "react";
import { Document, Example } from "@component-controls/core";
import { ColorLabel } from "../../components/ColorLabel";
import { AlphaColorPicker } from "../../../src/components/common/AlphaColorPicker";
import { ColorModel, RgbaColor } from "../../../src/types";
import { equalHex, equalColorObjects } from "../../../src/utils/compare";
import { hexToHsva, hsvaToHex, rgbaToHsva, hsvaToRgba } from "../../../src/utils/convert";

export default {
  title: "Common/AlphaColorPicker",
  component: AlphaColorPicker,
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
      <AlphaColorPicker<string> colorModel={colorModel} color={color} onChange={setColor} />
      <ColorLabel color={color} />
    </>
  );
};

export const rgba: Example = () => {
  const [color, setColor] = useState({ r: 154, g: 22, b: 192, a: 0.5 });
  const colorModel: ColorModel<RgbaColor> = {
    defaultColor: { r: 0, g: 0, b: 0, a: 1 },
    toHsva: rgbaToHsva,
    fromHsva: hsvaToRgba,
    equal: equalColorObjects,
  };
  return (
    <>
      <AlphaColorPicker<RgbaColor> colorModel={colorModel} color={color} onChange={setColor} />
      <ColorLabel color={color} />
    </>
  );
};
