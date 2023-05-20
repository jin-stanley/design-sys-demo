// .storybook/preview.tsx

import React from "react";
import { Preview } from "@storybook/react";
import { ThemeProvider } from "../src/theme/themeProvider";

const preview: Preview = {
  decorators: [
    (Story) => {
      return (
        <ThemeProvider>
          <Story />
        </ThemeProvider>
      );
    },
  ],
};

export default preview;
