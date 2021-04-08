import * as path from "path";
import { loadConfigurations } from "@component-controls/config";
import { renderExample } from "@component-controls/test-renderers";
import { render, act } from "@testing-library/react";
import { renderErr } from "@component-controls/test-renderers";

import doc, { Hex, Rgb } from "./../docs/src/common/ColorColorPicker.stories";

describe("ColorColorPicker", () => {
  const configPath = path.resolve(__dirname, "../docs");
  const config = loadConfigurations(configPath);

  test("Hex", () => {
    const example = Hex;

    let rendered;
    act(() => {
      rendered = renderExample({
        example,
        doc,
        config
      });
    });
    if (!rendered) {
      renderErr();
      return;
    }
    const { asFragment } = render(rendered);
    expect(asFragment()).toMatchSnapshot();
  });

  test("Rgb", () => {
    const example = Rgb;

    let rendered;
    act(() => {
      rendered = renderExample({
        example,
        doc,
        config
      });
    });
    if (!rendered) {
      renderErr();
      return;
    }
    const { asFragment } = render(rendered);
    expect(asFragment()).toMatchSnapshot();
  });
});
