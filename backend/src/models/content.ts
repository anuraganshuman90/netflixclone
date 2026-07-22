export interface Content {
    id: string;
    title: string;
    contentType: string;
    releaseDate?: number;
    releaseYear: number;
    status?: string;
    originalLanguage?: string;
    country?: string;
    streamingPlatform?: string;
    studio?: string;
    active: boolean;
}
