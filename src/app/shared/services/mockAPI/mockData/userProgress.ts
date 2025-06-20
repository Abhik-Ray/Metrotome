import { ResponseType, UserProgress } from "../mock-api.types";

export const userProgressData: ResponseType<UserProgress> = {
    meta: {
        count: 5,
        next: null,
        prev: null
    },
    results: [
        {
            id: 0,
            userId: 0,
            currentSheet: null,
            learnedNoteIds: []
        },
        {
            id: 1,
            userId: 1,
            currentSheet: null,
            learnedNoteIds: []
        },
        {
            id: 2,
            userId: 2,
            currentSheet: null,
            learnedNoteIds: []
        },
        {
            id: 3,
            userId: 3,
            currentSheet: null,
            learnedNoteIds: []
        },
        {
            id: 4,
            userId: 4,
            currentSheet: null,
            learnedNoteIds: []
        }
    ]
}