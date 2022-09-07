export interface FormDateProviderProps {
    formatter: (date: string | Date | number, format: string) => string;
}