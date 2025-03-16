import { FC } from 'react';
import styles from './PlayerAvatar.module.scss';
import { IPlayer } from '../../model/types';
import {ClassNames} from "shared/lib/classNames/classNames";

interface PlayerAvatarProps {
    player: IPlayer;
    size?: 'small' | 'medium' | 'large';
    className?: string;
}

export const PlayerAvatar: FC<PlayerAvatarProps> = ({
                                                        player,
                                                        size = 'medium',
                                                        className
                                                    }) => {
    return (
        <div
            className={ClassNames(
                styles.avatar,
                {
                    [styles.active]: player.isActive,
                    [styles[`size-${size}`]]: true,
                },
                [className]
            )}
        >
            <img src={player.avatar} alt={player.name} className={styles.image} />
        </div>
    );
};