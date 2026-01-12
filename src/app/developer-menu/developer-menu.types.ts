export interface DeveloperMenuAPIData {
    [api: string]: {
        [method: string]: (params: any) => any;
    }
}