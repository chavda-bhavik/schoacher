import classNames from 'classnames';
import { CardBody } from './CardBody';
import { CardHeader } from './CardHeader';
import { CardFooter } from './CardFooter';

interface CardProps {
    className?: string;
}
const Card: React.FC<CardProps> = ({ className, children }) => {
    return <div className={classNames('card', className)}>{children}</div>;
};

export default Object.assign(Card, {
    Header: CardHeader,
    Body: CardBody,
    Footer: CardFooter,
});
