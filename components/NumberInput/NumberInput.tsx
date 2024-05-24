import React, { ChangeEventHandler, KeyboardEventHandler } from "react";
import { Input, InputNumber } from "antd";

export interface NumberInputProps {
    addonAfter  : React.ReactNode,
    addonBefore : React.ReactNode,
    placeholder : string,
    disabled    : boolean,
    min        ?: number,
    max        ?: number,
    precision   : number,
    status		: "error" | "warning",
    leftIcon    : React.ReactNode,
    size        : "small" | "middle" | "large",
    step        : number,
    value       : number,
    variant     : "outlined" | "borderless" | "filled",
    onChange    : (value : number | string | null) => void,
    className   : string,
    showLeftIcon : boolean,
};

export default function NumberInput({
    addonAfter,
    addonBefore,
    placeholder,
    disabled,
    min,
    max,
    precision,
    status,
    leftIcon,
    size,
    step,
    value,
    variant,
    onChange,
    className,
    showLeftIcon,
} : NumberInputProps) {
    return (
        <InputNumber
            keyboard
            controls
            changeOnWheel
            min={min}
            max={max}
            size={size}
            step={step}
            value={value}
            status={status}
            variant={variant}
            disabled={disabled}
            decimalSeparator="."
            className={className}
            precision={precision}
            addonAfter={addonAfter}
            placeholder={placeholder}
            addonBefore={addonBefore}
            prefix={showLeftIcon && leftIcon}
            onChange={ (val : any) => onChange( val ) }
            formatter={ (value) => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',') }
            parser={ (value) => value?.replace(/\$\s?|(,*)/g, '') as unknown as number }
        />
    );
};