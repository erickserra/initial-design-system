import { Meta, StoryObj } from "@storybook/react";
import { Checkbox, CheckboxProps } from "./Checkbox";

export default {
  title: "Components/Checkbox",
  component: Checkbox.Root,
  args: {
    children: <Checkbox.Input />,
  },
} as Meta<CheckboxProps.Root>;

export const Default: StoryObj<CheckboxProps.Root> = {};

export const WithLabel: StoryObj<CheckboxProps.Root> = {
  args: {
    children: [<Checkbox.Input />, <Checkbox.Label>Label text</Checkbox.Label>],
  },
};
