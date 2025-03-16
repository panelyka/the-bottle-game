import { useState, useCallback } from 'react';
import { IPlayer } from 'entities/player/model/types';
import { BOTTLE_SPIN_DURATION } from 'shared/config/constants';
import spinAudio from 'shared/assets/sounds/spinning_sound.mp3';

interface UseSpinBottleProps {
    players: IPlayer[];
    activePlayerId: number;
    onSpinComplete: (selectedPlayerId: number) => void;
}

export const useSpinBottle = ({
                                  players,
                                  activePlayerId,
                                  onSpinComplete
                              }: UseSpinBottleProps) => {
    const [isSpinning, setIsSpinning] = useState(false);
    const [rotation, setRotation] = useState(0);

    const playSpinSound = () => {
        const audio = new Audio(spinAudio);
        audio.play();
    };

    const spinBottle = useCallback(() => {
        if (isSpinning) return;

        setIsSpinning(true);
        playSpinSound();

        // Исключаем активного игрока из выбора
        const possiblePlayers = players.filter(player => player.id !== activePlayerId);
        const selectedPlayer = possiblePlayers[Math.floor(Math.random() * possiblePlayers.length)];

        // Вычисляем угол в зависимости от позиции игрока в круге
        const playerIndex = players.findIndex(player => player.id === selectedPlayer.id);
        const totalPlayers = players.length;
        const anglePerPlayer = 360 / totalPlayers;

        // Угол, указывающий на выбранного игрока
        const targetPlayerAngle = playerIndex * anglePerPlayer;

        // Добавляем дополнительные вращения для эффекта
        const additionalRotations = 5 * 360; // 5 полных оборотов

        // Вычисляем новый угол с учетом текущего угла
        const currentRotation = rotation % 360;
        const rotationAdjustment = currentRotation > targetPlayerAngle ? 360 - currentRotation + targetPlayerAngle : targetPlayerAngle - currentRotation;
        const newRotation = rotation + additionalRotations + rotationAdjustment;

        console.log(playerIndex, targetPlayerAngle, newRotation);
        setRotation(newRotation);

        setTimeout(() => {
            setIsSpinning(false);
            onSpinComplete(selectedPlayer.id);
        }, BOTTLE_SPIN_DURATION);
    }, [isSpinning, players, activePlayerId, rotation, onSpinComplete]);

    return {
        isSpinning,
        rotation,
        spinBottle
    };
};