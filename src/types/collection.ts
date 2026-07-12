import type { Content } from "./content";
export interface ContentCollection {
    id: number;
    title: string;
    collectionType: string;
    contents: Content[];
}
