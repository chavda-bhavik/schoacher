import classNames from 'classnames';

interface CardHeaderProps {
    className?: string;
}
export const CardHeader: React.FC<CardHeaderProps> = ({ children, className }) => {
    return <div className={classNames('card-header', className)}>{children}</div>;
};
