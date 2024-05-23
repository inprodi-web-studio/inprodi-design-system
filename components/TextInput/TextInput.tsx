import React, { useState, useCallback, useMemo } from "react";
import { Input } from "antd";
import _debounce from 'lodash/debounce';
import InputMask from 'react-input-mask';

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
    onChange: (value: string) => void;
    onPressEnter?: React.KeyboardEventHandler<HTMLInputElement>;
    showLeftIcon?: boolean;
    showRightIcon?: boolean;
    value?: string;
    autoFocus?: boolean;
    className?: string;
    mask?: string;
    debounce?: number;
}

export default function TextInput({
    size,
    mask,
    value,
    status,
    variant,
    disabled,
    leftIcon,
    onChange,
    maxLength,
    allowClear,
    rightIcon,
    className,
    addonAfter,
    addonBefore,
    placeholder,
    defaultValue,
    onPressEnter,
    showLeftIcon,
    showRightIcon,
    debounce = 0,
}: TextInputProps) {
    const [inputValue, setInputValue] = useState<string | undefined>(value);

    const debouncedOnChange = useMemo(() => {
        if (debounce > 0 && !mask) {
            return _debounce((val: string) => onChange(val), debounce);
        } else {
            return onChange;
        }
    }, [onChange, debounce, mask]);

    const handleChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement> | any) => {
            const newValue = e.target.value;
            setInputValue(newValue);
            debouncedOnChange(newValue);
        },
        [debouncedOnChange]
    );

    const handleBlur = useCallback((e : any) => {
        if (mask && inputValue) {
            setInputValue(e.target.value);
            onChange(e.target.value);
        }
    }, [mask, inputValue, onChange]);

    const renderInput = () => {
        const commonProps = {
            size,
            value: inputValue ?? value,
            status,
            disabled,
            maxLength,
            className,
            allowClear,
            addonAfter,
            placeholder,
            addonBefore,
            defaultValue,
            onPressEnter,
            prefix: showLeftIcon && leftIcon,
            suffix: showRightIcon && rightIcon,
            onChange: handleChange,
        };

        if (mask) {
            return (
                <InputMask mask={mask} maskChar={null} onBlur={handleBlur} value={inputValue ?? value} disabled={disabled} onChange={handleChange}>
                    {((inputProps : any) => {
                        return <Input {...inputProps} {...commonProps} />;
                    }) as any}
                </InputMask>
            );
        }

        return <Input {...commonProps} />;
    };

    return renderInput();
}