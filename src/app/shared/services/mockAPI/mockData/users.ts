import { ResponseType, User } from "../mock-api.types";

export const usersData: ResponseType<User> = {
    meta: {
        count: 5,
        next: null,
        prev: null
    },
    results: [
        {
            id: 0,
            username: 'John Doe',
            password: 'passwor',
            sheets: [],
            favouriteSheets: [],
            isAdmin: false
        },
        {
            id: 1,
            username: 'Jane Smith',
            password: 'passwor',
            sheets: [],
            favouriteSheets: [],
            isAdmin: false
        },
        {
            id: 2,
            username: 'Alice Johnson',
            password: 'passwor',
            sheets: [],
            favouriteSheets: [],
            isAdmin: false
        },
        {
            id: 3,
            username: 'Bob Williams',
            password: 'passwor',
            sheets: [],
            favouriteSheets: [],
            isAdmin: false
        },
        {
            id: 4,
            username: 'Charlie Brown',
            password: 'passwor',
            sheets: [],
            favouriteSheets: [],
            isAdmin: false
        }
    ]
}