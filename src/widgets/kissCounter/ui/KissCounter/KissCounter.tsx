import { FC } from 'react';
import styles from './KissCounter.module.scss';
import kissImg from 'shared/assets/base_img/kiss.png';

interface KissCounterProps {
    count: number;
    className?: string;
}

export const KissCounter: FC<KissCounterProps> = ({ count, className }) => {
    return (
        <div className={`${styles.counter} ${className || ''}`}>
            <img
                src={kissImg}
                alt="Kiss"
                className={styles.icon}
            />
            <span className={styles.count}>{count}</span>
        </div>
    );
};