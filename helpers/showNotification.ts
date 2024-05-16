import { toast } from "sonner";

export const showNotification = (message: string, config : {
    type?: "success" | "info" | "warning" | "error" | "action";
    description?: string;
    action?: {
        label: string;
        onClick: () => void;
    };
}) => {
    switch (config?.type) {
        case "success":
            return toast.success(message);

        case "info":
            return toast.info(message);

        case "warning":
            return toast.warning(message);

        case "error":
            return toast.error(message);

        case "action":
            return toast(message, {
                action: {
                    label: config.action?.label || "Close",
                    onClick: config.action?.onClick || (() => { }),
                },
            });

        default:
            return toast(message, {
                description: config?.description,
            });
    }
}