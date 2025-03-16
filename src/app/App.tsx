import React, { useState } from 'react';
import { PlayersCircle } from '../widgets/playersCircle/ui/PlayersCircle/PlayersCircle';
import { useSpinBottle } from '../features/spinBottle/model/useSpinBottle';
import { Player } from 'shared/types/game';
import { avatars } from 'shared/assets/profile_img';
import { KissAnimation } from 'features/kissAnimation/ui/KissAnimation/KissAnimation';

const App: React.FC = () => {
    const players: Player[] = [
        // Пример данных игроков
        { id: 1, name: 'Player 1', avatar: avatars[0], isActive: false },
        { id: 2, name: 'Player 2', avatar: avatars[1], isActive: false },
        { id: 3, name: 'Player 3', avatar: avatars[2], isActive: false },
        { id: 4, name: 'Player 4', avatar: avatars[3], isActive: false },
        { id: 5, name: 'Player 5', avatar: avatars[4], isActive: false },
        { id: 6, name: 'Player 6', avatar: avatars[5], isActive: false },
        { id: 7, name: 'Player 7', avatar: avatars[6], isActive: false },
        { id: 8, name: 'Player 8', avatar: avatars[7], isActive: false },
        { id: 9, name: 'Player 9', avatar: avatars[8], isActive: false },
        { id: 10, name: 'Player 10', avatar: avatars[9], isActive: false},
        // Добавьте больше игроков по необходимости
    ];

    const [activePlayerId, setActivePlayerId] = useState(1); // Пример активного игрока
    const [selectedPlayerId, setSelectedPlayerId] = useState<number | null>(null);
    const [showKissAnimation, setShowKissAnimation] = useState(false);

    const { isSpinning, rotation, spinBottle } = useSpinBottle({
        players,
        activePlayerId,
        onSpinComplete: (selectedPlayerId: number) => {
            setSelectedPlayerId(selectedPlayerId);
            setShowKissAnimation(true);
        }
    });

    const handleKissAnimationComplete = () => {
        setShowKissAnimation(false);
    };

    const activePlayer = players.find(player => player.id === activePlayerId);
    const selectedPlayer = selectedPlayerId !== null ? players.find(player => player.id === selectedPlayerId) : null;

    return (
        <div style={{ width: '400px', height: '400px', position: 'relative' }}>
            <PlayersCircle players={players} rotation={rotation} isSpinning={isSpinning} />
            <button onClick={spinBottle} disabled={isSpinning}>Spin the Bottle</button>
            {activePlayer && selectedPlayer && (
                <KissAnimation
                    activePlayer={activePlayer}
                    selectedPlayer={selectedPlayer}
                    isVisible={showKissAnimation}
                    onComplete={handleKissAnimationComplete}
                />
            )}
        </div>
    );
}

export default App;