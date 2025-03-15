// @ts-nocheck
import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  "stories": [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],

  "addons": [{
    "name": "@storybook/addon-essentials",
    "options": {
      "docs": false,
    },
  }, "@storybook/addon-docs", "@storybook/addon-onboarding", "@chromatic-com/storybook", "@storybook/addon-interactions"],

  "framework": {
    "name": "@storybook/react-vite",
    "options": {},
  },

  core: {
    disableTelemetry: true,
  },

  "typescript": {
    "check": false,
    reactDocgen: "react-docgen-typescript",
  },

  docs: {
    autodocs: true,
  },
};
export default config;
