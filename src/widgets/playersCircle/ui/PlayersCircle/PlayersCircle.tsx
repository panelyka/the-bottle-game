import React, { FC } from 'react';
import styles from './PlayersCircle.module.scss';
import { IPlayer } from 'entities/player/model/types';
import { PlayerAvatar } from 'entities/player/ui/PlayerAvatar/PlayerAvatar';
import { ClassNames } from 'shared/lib/classNames/classNames';

interface PlayersCircleProps {
    players: IPlayer[];
    className?: string;
}

export const PlayersCircle: FC<PlayersCircleProps> = ({ players, className }) => {
    return (
        <div className={ClassNames(styles.circle, {}, [className])}>
            {players.map((player, index) => {
                const angle = (index * 360) / players.length;
                const radian = angle * Math.PI / 180;

                // Рассчитываем позицию относительно центра круга
                const radius = 40; // % от родительского контейнера
                const x = 50 + radius * Math.cos(radian); // 50% - это центр
                const y = 50 + radius * Math.sin(radian);

                const style = {
                    position: 'absolute',
                    left: `${x}%`,
                    top: `${y}%`,
                    transform: 'translate(-50%, -50%)',
                } as React.CSSProperties;

                return (
                    <div key={player.id} style={style} className={styles.playerPosition}>
                        <PlayerAvatar player={player} />
                    </div>
                );
            })}
        </div>
    );
};