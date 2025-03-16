import { FC, useEffect, useState } from 'react';
import styles from './Countdown.module.scss';
import { ClassNames } from 'shared/lib/classNames/classNames';

interface CountdownProps {
    isActive: boolean;
    onComplete: () => void;
    className?: string;
}

export const Countdown: FC<CountdownProps> = ({
                                                  isActive,
                                                  onComplete,
                                                  className
                                              }) => {
    const [count, setCount] = useState(3);

    useEffect(() => {
        if (isActive) {
            const interval = setInterval(() => {
                setCount((prev) => {
                    if (prev <= 1) {
                        clearInterval(interval);
                        onComplete();
                        return 3; // Сбрасываем для следующего использования
                    }
                    return prev - 1;
                });
            }, 1000);

            return () => clearInterval(interval);
        }
    }, [isActive, onComplete]);

    // Если счётчик неактивен, не отображаем компонент
    if (!isActive) return null;

    return (
        <div className={ClassNames(styles.countdown, {}, [className])}>
            <div className={styles.number}>{count}</div>
        </div>
    );
};