import { Check } from "phosphor-react";

export interface CheckboxProps {}

import * as RadixCheckbox from "@radix-ui/react-checkbox";
import { ReactNode } from "react";
import { Text } from "../Text/Text";

export namespace CheckboxProps {
  export interface Root {
    children: ReactNode;
  }

  export interface Label {
    children: string;
    size?: "sm" | "md" | "lg";
    className?: string;
  }
}

function CheckboxRoot(props: CheckboxProps.Root) {
  return <div className="flex items-center gap-3 w-full">{props.children}</div>;
}

CheckboxRoot.displayName = "Checkbox.Root";

function CheckboxLabel({
  children,
  size = "sm",
  className = "",
}: CheckboxProps.Label) {
  return (
    <Text size={size} className={className}>
      {children}
    </Text>
  );
}

CheckboxLabel.displayName = "Checkbox.Label";

function CheckboxInput(props: CheckboxProps) {
  return (
    <RadixCheckbox.Root className="w-6 h-6 bg-gray-800 rounded flex items-center justify-center">
      <RadixCheckbox.Indicator asChild>
        <Check weight="bold" className="h-5 w-5 text-cyan-500" />
      </RadixCheckbox.Indicator>
    </RadixCheckbox.Root>
  );
}

CheckboxInput.displayName = "Checkbox.Input";

export const Checkbox = {
  Root: CheckboxRoot,
  Label: CheckboxLabel,
  Input: CheckboxInput,
};
