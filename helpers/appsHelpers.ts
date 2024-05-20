const appsDictionary = {
    crm : {
        name  : "Comercial",
        image : "",
    },
    stock : {
        name  : "Inventarios",
        image : "",
    },
    purchase : {
        name  : "Compras",
        image : "",
    }
};

export const getApps = () => {
    const keys = Object.keys(appsDictionary);

    return {
        keys,
        dictionary : appsDictionary,
    };
};

export const getAppsConfig = {
    name: "getApps",
    importPath: "~/helpers/appsHelpers",
    params: [],
    isDefaultExport : false,
} as any;