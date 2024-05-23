export const validatePassword = (password: string) => {
    const regex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d!@#$%^&*]{8,}$/;
    return regex.test(password);
};

export const validatePasswordConfig = {
    name: "validatePassword",
    importPath: "~/helpers/validatePassword",
    params: [
        {
            name: "password",
            type: "string",
            description: "The password to validate",
        },
    ],
    isDefaultExport : false,
} as any;