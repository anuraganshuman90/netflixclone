import { getTable } from "../utils/excel";
import { Content } from "../models/content";
import { ContentRow } from "../models/content-row";


export class ContentRepository {
    static getAll(): Content[] {
        const rows = getTable<ContentRow>("CONTENT");

        return rows.map((row): Content => ({
            id: row["Content ID"],
            title: row.Title,
            contentType: row["Content Type"],
            releaseDate: row["Release Date"],
            releaseYear: row["Release Year"],
            status: row.Status,
            originalLanguage: row["Original Language"],
            country: row.Country,
            streamingPlatform: row["Streaming Platform"],
            studio: row.Studio,
            active: row.Active
        }));
    }

    static getById(id: string): Content | undefined {
        const content = this.getAll();

        return content.find(item => item.id === id);
    }

}
