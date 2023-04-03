import { IImages } from "./typeImages";

export interface IFetch {
    hits: IImages[],
    total: number,
    totalHits: number,
}