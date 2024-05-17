import React, { ChangeEventHandler, KeyboardEventHandler, forwardRef } from "react";
import { Input } from "antd";
import type { InputRef } from "antd";

export interface TextInputProps {
    placeholder: string;
    size: "small" | "middle" | "large";
    addonBefore?: string;
    addonAfter?: string;
    variant: "outlined" | "borderless" | "filled";
    allowClear?: boolean;
    defaultValue?: string;
    disabled?: boolean;
    maxLength?: number;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    status?: "error" | "warning";
    onChange: ChangeEventHandler<HTMLInputElement>;
    onPressEnter?: KeyboardEventHandler<HTMLInputElement>;
    showLeftIcon?: boolean;
    showRightIcon?: boolean;
    value?: string;
    autoFocus?: boolean;
};

const TextInput = forwardRef<InputRef, TextInputProps>(({
    size,
    value,
    status,
    variant,
    disabled,
    leftIcon,
    onChange,
    maxLength,
    allowClear,
    rightIcon,
    addonAfter,
    addonBefore,
    placeholder,
    defaultValue,
    onPressEnter,
    showLeftIcon,
    showRightIcon,
}, ref) => {
    return (
        <Input
            ref={ref}
            size={size}
            value={value}
            status={status}
            variant={variant}
            prefix={showLeftIcon && leftIcon}
            onChange={onChange}
            suffix={showRightIcon && rightIcon}
            disabled={disabled}
            maxLength={maxLength}
            allowClear={allowClear}
            addonAfter={addonAfter}
            placeholder={placeholder}
            addonBefore={addonBefore}
            defaultValue={defaultValue}
            onPressEnter={onPressEnter}
        />
    );
});

TextInput.displayName = "TextInput";

export default TextInput;
