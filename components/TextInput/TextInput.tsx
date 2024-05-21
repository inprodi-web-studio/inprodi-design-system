import React, { ChangeEventHandler, KeyboardEventHandler } from "react";
import { Input } from "antd";

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

export default function TextInput({
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
} : TextInputProps) {
    return (
        <Input
            size={size}
            value={value}
            status={status}
            variant={variant}
            prefix={showLeftIcon && leftIcon}
            onChange={ (e : any ) => onChange( e.target.value ) }
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
};