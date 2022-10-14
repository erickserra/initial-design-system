import clsx from "clsx";
import { InputHTMLAttributes, ReactNode } from "react";
import { Slot } from "@radix-ui/react-slot";

export namespace TextInputProps {
  export interface Root {
    children: ReactNode;
  }

  export interface Icon {
    children: ReactNode;
  }

  export interface Input extends InputHTMLAttributes<HTMLInputElement> {}
}

function TextInputRoot(props: TextInputProps.Root) {
  return (
    <div
      className={clsx(
        "flex items-center gap-3 px-3 rounded bg-gray-800 w-full focus-within:ring-2 ring-cyan-300"
      )}
    >
      {props.children}
    </div>
  );
}

TextInputRoot.displayName = "TextInput.Root";

function TextInputIcon(props: TextInputProps.Icon) {
  return <Slot className="w-6 h-6 text-gray-400">{props.children}</Slot>;
}

TextInputIcon.displayName = "TextInput.Icon";

function TextInputInput(props: TextInputProps.Input) {
  return (
    <input
      className="bg-transparent flex-1 py-4 h-12 text-gray-100 text-xs outline-none border-none placeholder:text-gray-400"
      {...props}
    />
  );
}

TextInputInput.displayName = "TextInput.Input";

export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputInput,
  Icon: TextInputIcon,
};
