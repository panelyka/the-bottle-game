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
    const [isCompleted, setIsCompleted] = useState(false); // добавлено состояние для отслеживания завершения

    useEffect(() => {
        if (isActive && !isCompleted) {
            const interval = setInterval(() => {
                setCount((prev) => {
                    if (prev <= 1) {
                        clearInterval(interval);
                        onComplete();
                        setIsCompleted(true); // устанавливаем состояние завершения
                        return 3; // Сбрасываем для следующего использования
                    }
                    return prev - 1;
                });
            }, 1000);

            return () => clearInterval(interval);
        }
    }, [isActive, onComplete, isCompleted]);

    useEffect(() => {
        if (!isActive) {
            setIsCompleted(false); // сбрасываем состояние завершения при деактивации
        }
    }, [isActive]);

    // Если счётчик неактивен или завершен, не отображаем компонент
    if (!isActive || isCompleted) return null;

    return (
        <div className={ClassNames(styles.countdown, {}, [className])}>
            <div className={styles.number}>{count}</div>
        </div>
    );
};