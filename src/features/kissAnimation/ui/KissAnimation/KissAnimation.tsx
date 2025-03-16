import { FC, useEffect } from 'react';
import styles from './KissAnimation.module.scss';
import { IPlayer } from 'entities/player/model/types';
import { PlayerAvatar } from 'entities/player/ui/PlayerAvatar/PlayerAvatar';
import kissSound from 'shared/assets/sounds/kiss_sound.mp3';
import kissImg from 'shared/assets/base_img/kiss.png';

interface KissAnimationProps {
    activePlayer: IPlayer;
    selectedPlayer: IPlayer;
    isVisible: boolean;
    onComplete: () => void;
}

export const KissAnimation: FC<KissAnimationProps> = ({
                                                          activePlayer,
                                                          selectedPlayer,
                                                          isVisible,
                                                          onComplete
                                                      }) => {
    useEffect(() => {
        if (isVisible) {
            const audio = new Audio(kissSound);
            audio.play();

            const timer = setTimeout(() => {
                onComplete();
            }, 2000); // 2 seconds for animation

            return () => clearTimeout(timer);
        }
    }, [isVisible, onComplete]);

    if (!isVisible) return null;

    return (
        <div className={styles.container}>
            <div className={styles.players}>
                <div className={`${styles.playerWrapper} ${styles.playerLeft}`}>
                    <PlayerAvatar player={activePlayer} size="large" />
                </div>

                <div className={styles.kissIcon}>
                    <img src={kissImg} alt="Kiss" />
                </div>

                <div className={`${styles.playerWrapper} ${styles.playerRight}`}>
                    <PlayerAvatar player={selectedPlayer} size="large" />
                </div>
            </div>
        </div>
    );
};