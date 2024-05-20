import { Button as AntButton } from "antd";

export interface ButtonProps {
    label: "string";
    block ?: boolean;
    danger ?: boolean;
    disabled ?: boolean;
    withIcon: boolean;
    ghost ?: boolean;
    icon ?: React.ReactNode;
    iconPosition ?: "start" | "end";
    loading ?: boolean;
    isSubmit ?: boolean;
    size: "large" | "middle" | "small";
    variant: "primary" | "dashed" | "link" | "text" | "default";
};

export default function Button({
    label,
    block,
    danger,
    disabled,
    ghost,
    withIcon,
    icon,
    iconPosition,
    isSubmit,
    loading,
    size,
    variant,
} : ButtonProps) {
    return (
        <AntButton
            htmlType={ isSubmit ? "submit" : "button" }
            block={block}
            danger={danger}
            disabled={disabled}
            ghost={ghost}
            icon={ withIcon ? icon : null }
            iconPosition={iconPosition}
            loading={loading}
            size={size}
            type={variant}
            style={{
                flexShrink : 0,
            }}
        >
            {label}
        </AntButton>
    );
};