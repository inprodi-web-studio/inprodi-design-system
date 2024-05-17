import {
    Card as AntCard,
    Flex
 } from "antd";

 import styles from "./Card.module.css";

 import TitleText from "../TitleText";
import { classNames } from "@plasmicapp/react-web";

export interface CardProps {
    loading?     : boolean,
    showTitle    : boolean,
    title?       : string,
    description? : string,
    content      : React.ReactNode,
    width        : string,
    padding      : string,
    shadow       : "sm" | "md" | "lg" | "none",
};

export default function Card({
    loading,
    showTitle,
    title,
    description,
    content,
    width,
    shadow,
    padding,
} : CardProps) {
    return (
        <AntCard
            loading={loading}
            className={classNames( styles["vizion-card"], {
                [styles["vizion-card--sm-shadow"]] : shadow === "sm",
                [styles["vizion-card--md-shadow"]] : shadow === "md",
                [styles["vizion-card--lg-shadow"]] : shadow === "lg",
            })}
            style={{
                maxWidth : width,
                padding  : padding,
            }}
        >
            { showTitle && (
                <TitleText size="sm" title={title} secondaryText={description} className={styles["vizion-card__title"]} />
            )}

            <Flex>
                {content}
            </Flex>
        </AntCard>
    );
};