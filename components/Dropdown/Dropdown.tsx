import { Dropdown as AntDropdown, Skeleton, theme } from 'antd';
import type { InputRef, MenuProps } from 'antd';
import { CSSProperties, useRef } from 'react';
import TextInput from '../TextInput/TextInput';
import MagnifyingGlasssvgIcon from '../plasmic/inprodi_design_system/icons/PlasmicIcon__MagnifyingGlasssvg';

const { useToken } = theme;

export interface DropdownProps {
    content: React.ReactNode,
    dropdownContent: React.ReactNode,
    menu: MenuProps,
    trigger: Array<"click" | "hover" | "contextMenu">,
    onOpenChange: (val: boolean) => void,
    dropdownStyle: CSSProperties,
    isLoading: boolean,
    isSearchable: boolean,
    onSearchValueChange: (val: any) => void,
    searchValue?: string,
    className?: string,
};

export default function Dropdown({
    content,
    dropdownContent,
    trigger,
    onOpenChange,
    dropdownStyle,
    isLoading,
    isSearchable,
    searchValue,
    onSearchValueChange,
    className,
}: DropdownProps) {
    const { token } = useToken();
    const inputRef = useRef<InputRef>(null);

    const contentStyle: React.CSSProperties = {
        backgroundColor: token.colorBgElevated,
        borderRadius: "6px",
        border: `solid 1px ${token.colorBorder}`,
        boxShadow: token.boxShadowSecondary,
        ...dropdownStyle,
    };

    const triggerStyle: React.CSSProperties = {
        cursor: "pointer",
    };

    const handleOpenChange = (open: boolean) => {
        if (open && isSearchable) {
            setTimeout(() => {
                inputRef.current?.focus({ preventScroll: true });
            }, 0);
        }

        if ( !open ) {
            onSearchValueChange("");
        }

        if (onOpenChange) {
            onOpenChange(open);
        }
    };

    return (
        <AntDropdown
        trigger={trigger}
        className={className}
            onOpenChange={handleOpenChange}
            dropdownRender={() =>
                <div style={contentStyle}>
                    {isSearchable && (
                        <div className="search-container" style={{
                            margin: "-4px -4px 4px -4px",
                            borderBottom: `1px solid ${token.colorBorder}`,
                            backgroundColor: token.colorBgLayout,
                            borderRadius: "6px 6px 0 0",
                        }}>
                            <TextInput
                                showLeftIcon
                                size="small"
                                // ref={inputRef}
                                debounce={600}
                                value={searchValue}
                                leftIcon={<MagnifyingGlasssvgIcon color="rgba(0, 0, 0, 0.25)" />}
                                variant="borderless"
                                onChange={(e) => onSearchValueChange( e )}
                                placeholder="Buscar..."
                            />
                        </div>
                    )}
                    {isLoading ?
                        <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                            <Skeleton.Button active block shape="default" size="small" />
                            <Skeleton.Button active block shape="default" size="small" />
                            <Skeleton.Button active block shape="default" size="small" />
                        </div>
                        :
                        dropdownContent
                    }
                </div>
            }
        >
            <div style={triggerStyle}>
                {content}
            </div>
        </AntDropdown>
    );
};
