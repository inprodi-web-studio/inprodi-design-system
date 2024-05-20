import { Divider as AntDivider } from "antd";

export interface DividerProps {
    dashed ?: boolean;
    orientation ?: "left" | "right" | "center";
    orientationMargin ?: number | string;
    plain ?: boolean;
    direction: "vertical" | "horizontal"
    text ?: string;
    margin: string;
};

export default function Divider({
    dashed,
    orientation,
    orientationMargin,
    plain,
    direction,
    text,
    margin,
} : DividerProps) {
    return (
        <AntDivider
            plain={plain}
            dashed={dashed}
            orientation={orientation}
            orientationMargin={orientationMargin}
            type={direction}
            style={{
                margin,
            }}
        >
            {text}
        </AntDivider>
    );
};