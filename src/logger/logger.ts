const prefix = "[react-formz]";

const logger = {
    error: (...args: any[]) => {
        console.error(prefix, ...args);
    },
    log: (...args: any[]) => {
        console.log(prefix, ...args);
    },
    warn: (...args: any[]) => {
        console.warn(prefix, ...args);
    },
};

export default logger;
