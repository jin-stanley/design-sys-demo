import type { Meta, StoryObj } from "@storybook/react";

import { Button } from ".";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Example/Button",
  component: Button,

  tags: ["autodocs"],
  argTypes: {
    children: { control: "text" },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const WoolworthsLarge: Story = {
  args: {
    brand: "woolworths",
    size: "large",
    children: "Woolworths Large",
  },
};
export const WoolworthsSmall: Story = {
  args: {
    brand: "woolworths",
    size: "small",
    children: "Woolworths Small",
  },
};
export const EverydayRewardsLarge: Story = {
  args: {
    brand: "everyday-rewards",
    size: "large",
    children: "Everyday Rewards Large",
  },
};
export const EverydayRewardsSmall: Story = {
  args: {
    brand: "everyday-rewards",
    size: "small",
    children: "Everyday Rewards Small",
  },
};

export const CustomizeButton: Story = {
  args: {
    overrides: {
      "--button-customize-brand-default": "#c5b310",
      "--button-customize-brand-hover": "#e8cd00",
      "--button-customize-brand-focus": "#e8cd00",
      "--button-customize-brand-active": "#ffc400",
      color: "black",
      fontWeight: 700,
    },
    children: "Customize Button",
  },
};
export const WoolworthsCustomSmall: Story = {
  args: {
    overrides: {
      background: "deepskyblue",
      color: "white",
      fontWeight: 700,
    },
    brand: "woolworths",
    size: "small",
    children: "Woolworths Small",
  },
};

export const DisabledEverydayRewardsSmall: Story = {
  args: {
    brand: "everyday-rewards",
    size: "small",
    disabled: true,
    children: "Everyday Rewards Small Disabled",
  },
};
export const FullWidthEverydayRewardsSmall: Story = {
  args: {
    brand: "everyday-rewards",
    size: "small",
    fullWidth: true,
    children: "Everyday Rewards Small Disabled",
  },
};
export const DisabledCustomizeButton: Story = {
  args: {
    overrides: {
      "--button-customize-brand-default": "#c5b310",
      "--button-customize-brand-hover": "#e8cd00",
      "--button-customize-brand-focus": "#e8cd00",
      "--button-customize-brand-active": "#ffc400",

      color: "black",
      fontWeight: 700,
    },
    disabled: true,
    children: "Customize Button Disabled",
  },
};
