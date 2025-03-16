export type Player = {
    id: number;
    name: string;
    avatar: string;
    isActive: boolean;
};

export type GameState = {
    players: Player[];
    activePlayerId: number;
    kissCount: number;
    isSpinning: boolean;
    isAnimatingKiss: boolean;
    selectedPlayerId: number | null;
};