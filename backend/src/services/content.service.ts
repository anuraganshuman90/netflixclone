import { ContentRepository } from "../repositories/content.repository";
import { ContentFilter } from "../types/content.filter";


export class ContentService {
    static getAll(filters: ContentFilter) {
        let content = ContentRepository.getAll();
        content = this.filter(content, filters);
        content = this.sort(content, filters);
        content = this.paginate(content, filters);
        return content;
    }
    private static filter(content: any[], filters: ContentFilter) {
        return content;
    }
    private static sort(content: any[], filters: ContentFilter) {
        return content;
    }
    private static paginate(content: any[], filters: ContentFilter) {
        return content;
    }

    static getById(id: string) {
        return ContentRepository.getById(id)

    }
}
