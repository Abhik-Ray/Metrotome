import { User } from "./dbSchema.types";

export interface GetRequest {
    count?: number;
    order?: string;
}

export interface GetUsers extends GetRequest {
    id?: number;
    ids?: number[];
}

export interface PostUsers extends Omit<User, 'id'> {
    id?: number;
}

export interface PatchUsers extends Partial<Omit<User, 'id'>> {
    id: number;
}

export interface DeleteUsers {
    id: number;
}