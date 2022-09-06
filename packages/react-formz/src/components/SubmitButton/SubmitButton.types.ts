type HtmlButtonProps = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

export interface SubmitButtonProps extends HtmlButtonProps {
    as?: "button" | ((props: HtmlButtonProps) => JSX.Element)
}