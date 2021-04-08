import React, { useState } from "react";
import { Document, Example } from "@component-controls/core";
import { ColorLabel } from "../../components/ColorLabel";
import { Interactive, Interaction } from "../../../src/components/common/Interactive";

export default {
  title: "Common/Interactive",
  component: Interactive,
} as Document;

export const Overview: Example = () => {
  const [key, setKey] = useState<Interaction | undefined>();
  const [move, setMove] = useState<Interaction | undefined>();
  return (
    <>
      <Interactive onKey={setKey} onMove={setMove}>
        <input defaultValue="use keyboad and mouse move" />
      </Interactive>
      <ColorLabel label="key" color={key as Record<"left" | "top", number>} />
      <ColorLabel label="move" color={move as Record<"left" | "top", number>} />
    </>
  );
};
