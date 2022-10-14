import { Meta, StoryObj } from "@storybook/react";
import { TextInput, TextInputProps } from "./TextInput";
import { Envelope } from "phosphor-react";

export default {
  title: "Components/TextInput",
  component: TextInput.Root,
  args: {
    children: [
      <TextInput.Icon>
        <Envelope />
      </TextInput.Icon>,
      <TextInput.Input placeholder="Type your e-mail address" />,
    ],
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
} as Meta<TextInputProps.Root>;

export const Default: StoryObj<TextInputProps.Root> = {};

export const WithoutIcon: StoryObj<TextInputProps.Root> = {
  args: {
    children: (
      <TextInput.Input type="email" placeholder="Type your e-mail address" />
    ),
  },
};
