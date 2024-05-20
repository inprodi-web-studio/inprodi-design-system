export const validateEmail = (email: string) => {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
};

export const validateEmailConfig = {
    name: "validateEmail",
    importPath: "~/helpers/validateEmail",
    params: [
        {
            name: "email",
            type: "string",
            description: "The email address to validate",
        },
    ],
    isDefaultExport : false,
} as any;