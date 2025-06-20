export interface ResponseType<k> {
    meta: {
        count: number;
        next: string | null;
        prev: string | null;
    },
    results: k[]
}

export interface User {
    id: number;
    username: string;
    password: string;
    sheets: Sheet['id'][];
    favouriteSheets: Sheet['id'][];
    isAdmin: boolean;
    // reminders
}

export interface UserProgress {
    id: number;
    userId: User['id'];
    currentSheet: Sheet['id'] | null;
    learnedNoteIds: Note['id'][];
}

export interface UserConfig {
    id: number;
    userId: User['id'];
    theme: 'dark' | 'light';
    acceptCookies: 'all' | 'partial' | 'reject'
}

export interface Sheet {
    id: number;
    name: string;
    info?: string;
    author?: string;
    album?: string;
    genre?: Genre['id'][];
    coverImage?: string;
    isPublic: boolean;
    difficulty?: number;
    references?: SheetReference['id'][];
    backingTracks?: SheetBackingTrack['id'][];
}

export interface Instrument {
    id: number;
    name: string;
    info?: string;
}

export interface Note {
    id: number;
    info: string;
    name: string;
}

export interface SheetReference {
    id: number;
    name: string;
    info?: string;
    author?: string;
    url: string;
}

export interface SheetBackingTrack {
    id: number;
    instrumentId: Instrument['id'];
    info?: string;
    url: string;
}

export interface Genre {
    id: number;
    info?: string;
    name: string;
}

export interface DbSchema {
    users: User[];
    userProgress: UserProgress[];
    userConfigs: UserConfig[];
    sheets: Sheet[];
    instruments: Instrument[];
    notes: Note[];
    sheetReferences: SheetReference[];
    sheetBackingTracks: SheetBackingTrack[];
    genres: Genre[];
}