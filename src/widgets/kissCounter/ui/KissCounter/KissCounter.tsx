import { FC } from 'react';
import styles from './KissCounter.module.scss';

interface KissCounterProps {
    count: number;
    className?: string;
}

export const KissCounter: FC<KissCounterProps> = ({ count, className }) => {
    return (
        <div className={`${styles.counter} ${className || ''}`}>
            <img
                src="shared/assets/base_img/kiss.png"
                alt="Kiss"
                className={styles.icon}
            />
            <span className={styles.count}>{count}</span>
        </div>
    );
};