/* eslint-disable react/display-name */
import React from "react";
import { RunOnlyConfiguration, defaultRunConfig } from "@component-controls/core";
import { TestingPage } from "./TestingPage";

const config: RunOnlyConfiguration = {
  logo: null,
  analytics: "UA-XXXXXX-1",
  title: `react-colorful`,
  description: `A tiny color picker component for modern React apps`,
  author: `Vlad Shilov <omgovich@ya.ru>`,
  pages: {
    story: {
      tabs: [
        ...defaultRunConfig.pages.story.tabs,
        { title: "Testing", render: () => <TestingPage /> },
      ],
    },
  },
};

export default config;
