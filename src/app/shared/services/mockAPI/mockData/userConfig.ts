import { ResponseType, UserConfig } from "../mock-api.types";

export const userConfigs: ResponseType<UserConfig> = {
    meta: {
        count: 5,
        next: null,
        prev: null
    },
    results: [
        {
            id: 0,
            userId: 0,
            theme: 'dark',
            acceptCookies: 'all'
        },
        {
            id: 1,
            userId: 1,
            theme: 'light',
            acceptCookies: 'all'
        },
        {
            id: 2,
            userId: 2,
            theme: 'dark',
            acceptCookies: 'all'
        },
        {
            id: 3,
            userId: 3,
            theme: 'light',
            acceptCookies: 'all'
        },
        {
            id: 4,
            userId: 4,
            theme: 'dark',
            acceptCookies: 'all'
        }
    ]
}