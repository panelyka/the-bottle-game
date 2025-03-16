import React, { FC } from 'react';
import styles from './PlayersCircle.module.scss';
import { IPlayer } from 'entities/player/model/types';
import { PlayerAvatar } from 'entities/player/ui/PlayerAvatar/PlayerAvatar';
import { Bottle } from 'entities/bottle/ui/Bottle/Bottle';
import { ClassNames } from 'shared/lib/classNames/classNames';

interface PlayersCircleProps {
    players: IPlayer[];
    rotation: number;
    isSpinning: boolean;
    className?: string;
}

export const PlayersCircle: FC<PlayersCircleProps> = ({ players, rotation, isSpinning, className }) => {
    return (
        <div className={ClassNames(styles.circle, {}, [className])}>
            <Bottle rotation={rotation} isSpinning={isSpinning} />
            {players.map((player, index) => {
                const angle = ((index  - 2.5 ) / players.length) * 2 * Math.PI


                const radius = 40; // % от родительского контейнера
                const x = radius * Math.cos(angle); // 50% - это центр
                const y = radius * Math.sin(angle);

                const style = {
                    position: 'absolute',
                    left: `calc(50% + ${x}%)`,
                    top: `calc(50% + ${y}%)`,

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