import classNames from 'classnames';
import { CardBody } from './CardBody';
import { CardHeader } from './CardHeader';
import { CardFooter } from './CardFooter';

interface CardProps {
    className?: string;
    asModal?: boolean;
}
const Card: React.FC<CardProps> = ({ className, children, asModal = false }) => {
    return (
        <div
            className={classNames(
                'card',
                {
                    'w-full md:max-w-2/3 mx-auto': asModal,
                },
                className
            )}
        >
            {children}
        </div>
    );
};

export default Object.assign(Card, {
    Header: CardHeader,
    Body: CardBody,
    Footer: CardFooter,
});
