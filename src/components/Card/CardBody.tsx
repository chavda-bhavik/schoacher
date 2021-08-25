import classNames from 'classnames';

interface CardBodyProps {
    className?: string;
}
export const CardBody: React.FC<CardBodyProps> = ({ className, children }) => {
    return <div className={classNames('card-body', className)}>{children}</div>;
};
