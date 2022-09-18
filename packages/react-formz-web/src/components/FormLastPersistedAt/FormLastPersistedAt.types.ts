type HtmlSpanProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;

export interface FormLastPersistedAtProps extends HtmlSpanProps {
    format?: string | ((date: Date) => string);
}