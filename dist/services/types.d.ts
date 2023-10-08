export interface AlexousGuardModel {
    [key: string]: string | number | boolean;
}
export type GuardModelParams = {
    object: any;
    model: AlexousGuardModel;
};
export type GuardModelArrayParams = {
    array: any[];
    model: AlexousGuardModel;
};
export interface AlexousGuard {
    guardModel(params: GuardModelParams): boolean;
    guardModelArray(params: GuardModelArrayParams): boolean;
}
