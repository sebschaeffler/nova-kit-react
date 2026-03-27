import type { StorybookConfig } from "@storybook/react-vite";
import tailwindcss from "@tailwindcss/vite";

const config: StorybookConfig = {
  "stories": [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  "addons": [
    "@storybook/addon-onboarding",
    "@storybook/addon-docs",
    "@chromatic-com/storybook",
  ],
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

  async viteFinal(config: Record<string, any>) {
    config.plugins = config.plugins || [];
    config.plugins.push(tailwindcss());
    return config;
  },
};
export default config;
