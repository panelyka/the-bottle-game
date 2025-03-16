import { FC } from 'react';
import styles from './Bottle.module.scss';
import bottleImg from 'shared/assets/base_img/bottle.png';

interface BottleProps {
    rotation: number;
    isSpinning: boolean;
    className?: string;
}

export const Bottle: FC<BottleProps> = ({
                                            rotation,
                                            isSpinning,
                                            className
                                        }) => {
    const bottleStyle = {
        transform: `rotate(${rotation}deg)`,
        transition: isSpinning ? 'transform 4s ease-out' : 'none'
    };

    return (
        <div className={`${styles.bottle} ${className || ''}`} style={bottleStyle}>
            <img
                src={bottleImg}
                alt="Bottle"
                className={styles.image}
            />
        </div>
    );
};