import classNames from 'classnames';

interface CardFooterProps {
    className?: string;
}

export const CardFooter: React.FC<CardFooterProps> = ({ children, className }) => {
    return <div className={classNames('card-footer', className)}>{children}</div>;
};
