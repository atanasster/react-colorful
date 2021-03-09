import React, { FC } from "react";
interface ColorLabelProps {
  color: string | Record<string, unknown> | undefined;
  label?: string;
}

export const ColorLabel: FC<ColorLabelProps> = ({ color, label }) => {
  const stringified =
    typeof color === "undefined"
      ? ""
      : typeof color === "string"
      ? color
      : JSON.stringify(color, null, 2);
  return (
    <div style={{ paddingTop: 10, fontWeight: "bold" }}>{`${
      label ? `${label}: ` : ""
    }${stringified}`}</div>
  );
};
