import colors from "ansi-colors";

const prefix = colors.blue("[react-formz]");
const isDevelopment = process.env.NODE_ENV === "development";

const logger = {
    error: (...args: any[]) => {
        if (isDevelopment) console.error(prefix, ...args);
    },
    log: (...args: any[]) => {
        if (isDevelopment) console.log(prefix, ...args);
    },
    warn: (...args: any[]) => {
        if (isDevelopment) console.warn(prefix, ...args);
    },
};

export default logger;
