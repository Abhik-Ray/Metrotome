import { DbSchema } from "../mock-api.types";
import { userConfigs } from "./userConfig";
import { userProgressData } from "./userProgress";
import { usersData } from "./users";

export const defaultData: DbSchema = {
    users: usersData.results,
    userConfigs: userConfigs.results,
    userProgress: userProgressData.results,
    sheets: [],
    instruments: [],
    notes: [],
    sheetReferences: [],
    sheetBackingTracks: [],
    genres: []
}