import { classNames } from "@plasmicapp/react-web";
import Image from "next/image";

import styles from "./Avatar.module.css";

export interface AvatarProps {
    variant: "filled" | "light";
    color: string;
    type: "text" | "icon" | "image";
    circular: boolean;
    bordered: boolean;
    size: "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl";
    content?: string;
    icon?: React.ReactNode;
    image?: string;
};

export default function Avatar({
    variant,
    color,
    type,
    circular,
    bordered,
    size,
    content,
    icon,
    image,
}: AvatarProps) {
    const initial = content?.charAt(0).toUpperCase() ?? "";
    return (
        <div className={classNames(styles["avatar-container"], {
            [styles["avatar-xxs"]]: size === "xxs",
            [styles["avatar-xs"]]: size === "xs",
            [styles["avatar-sm"]]: size === "sm",
            [styles["avatar-md"]]: size === "md",
            [styles["avatar-lg"]]: size === "lg",
            [styles["avatar-xl"]]: size === "xl",
            [styles["avatar-xxl"]]: size === "xxl",
            [styles["filled"]]: variant === "filled",
            [styles["light"]]: variant === "light",
            [styles["circular"]]: circular,
            [styles["bordered"]]: bordered,
        })} style={{
            borderColor: variant === "filled" ? color : `${color}4D`,
        }}>
            <div className={styles["inner-container"]} style={{
                backgroundColor: variant === "filled" ? color : `${color}1F`,
                color: variant === "filled" ? "white" : color,
            }}>
                {type === "text" && (
                    <p className={styles["content"]}>{initial}</p>
                )}
                {type === "icon" && icon}
                {type === "image" && (
                    <img src={image ?? ""} alt="avatar-image" />
                )}
            </div>
        </div>
    );
};