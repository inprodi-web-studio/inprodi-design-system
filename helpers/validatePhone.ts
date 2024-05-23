export const validatePone = (phone: string) => {
    const regex = /^[2-9]\d{9}$/;
    return regex.test(phone);
};

export const validatePoneConfig = {
    name: "validatePhone",
    importPath: "~/helpers/validatePhone",
    params: [
        {
            name: "phone",
            type: "string",
            description: "The phone number to validate",
        },
    ],
    isDefaultExport : false,
} as any;