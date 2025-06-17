import { faker } from '@faker-js/faker';
import { Genre, Instrument, Sheet, SheetBackingTrack, SheetReference, User, UserConfig, UserProgress } from './dbSchema.types';

export class PopulationScripts {
    static generateUserData = (id: number = 0): User => ({
        id,
        username: faker.internet.username(),
        password: 'password',
        sheets: [],
        favouriteSheets: [],
        isAdmin: true
    })

    static generateUserProgressData = (id: number = 0, userId: number): UserProgress => ({
        id,
        userId,
        currentSheet: null,
        learnedNoteIds: []
    })

    static generateUserConfigData = (id: number = 0, userId: number): UserConfig => ({
        id,
        userId,
        theme: 'light',
        acceptCookies: 'all'
    })

    static generateSheetData = (id: number = 0): Sheet => ({
        id,
        name: faker.lorem.sentence(3),
        author: faker.person.fullName(),
        album: faker.lorem.word(),
        info: faker.lorem.word(),
        genre: [],
        coverImage: faker.image.url({ height: 300, width: 300 }),
        isPublic: true,
        difficulty: faker.number.int({ max: 5, min: 1 }),
        references: [],
        backingTracks: []
    })

    static generateInstrumentsData = (id: number = 0): Instrument => ({
        id,
        name: faker.lorem.word(),
        info: faker.lorem.paragraph()
    })

    static generateSheetReferenceData = (id: number = 0): SheetReference => ({
        id,
        name: faker.lorem.sentence(3),
        info: faker.lorem.paragraph(),
        author: faker.person.fullName(),
        url: faker.internet.url()
    })

    static generateSheetBackingTrackData = (id: number = 0, instrumentId: number): SheetBackingTrack => ({
        id,
        instrumentId,
        info: faker.lorem.paragraph(),
        url: faker.internet.url()
    })

    static generateGenreData = (id: number = 0): Genre => ({
        id,
        info: faker.lorem.paragraph(),
        name: faker.lorem.word()
    })
}