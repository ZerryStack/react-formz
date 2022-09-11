const Storage = new Map<string, any>();

function mockLocalStorage() {
    const localStorage = {
        getItem: jest.fn().mockImplementation((key: string) => {
            return Storage.get(key);
        }),
        removeItem: jest.fn().mockImplementation((key: string) => {
            return Storage.delete(key);
        }),
        setItem: jest.fn().mockImplementation((key: string, item: any) => {
            return Storage.set(key, item);
        }),
        clear: jest.fn().mockImplementation(() => {
            
        }),
        key: jest.fn().mockImplementation((index: number) => {
            let counter = -1;

            for (const [, value] of Storage.entries()) {
                counter++;

                if (index === counter) return value;
            }

            return null;
        }),
        get length() : number {
            return Storage.size;
        },
    }

    window.localStorage = localStorage;
}

export default mockLocalStorage;