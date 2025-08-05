import type { Meta, StoryObj } from "@storybook/react";
import { FormField } from "../components/FormField";
import { CheckBox } from "../components/CheckBox";

const meta: Meta<typeof FormField> = {
  title: "Components/FormField",
  component: FormField,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    description: {
      control: "text",
      description: "Description text below the label",
    },
    required: {
      control: "boolean",
      description: "Whether the field is required",
    },
    disabled: {
      control: "boolean",
      description: "Whether the field is disabled",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const WithCheckBox: Story = {
  args: {
    required: true,
    description: "Please read and accept our terms and conditions",
    children: <CheckBox label="I agree to the terms" />,
  },
};

export const WithCheckBoxRequired: Story = {
  args: {
    required: true,
    children: <CheckBox label="I agree to the terms" />,
  },
};

export const WithCheckBoxOptional: Story = {
  args: {
    required: false,
    children: <CheckBox label="I agree to the terms" />,
  },
};

export const WithCheckBoxDisabled: Story = {
  args: {
    disabled: true,
    children: <CheckBox label="I agree to the terms" />,
  },
};
