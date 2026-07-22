export interface ContentFilter {
    genre?: string;
    language?: string;
    country?: string;
    platform?: string;

    sort?: string;
    order?: "asc" | "desc";

    page?: number;
    pageSize?: number;
}
