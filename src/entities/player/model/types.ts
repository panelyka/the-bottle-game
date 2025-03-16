export interface IPlayer {
    id: number;
    name: string;
    avatar: string;
    isActive: boolean;
}

export interface PlayerState {
    players: IPlayer[];
    activePlayerId: number | null;
}