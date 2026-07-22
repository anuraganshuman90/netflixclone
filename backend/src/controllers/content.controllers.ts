import { Request, Response } from "express";
import { ContentService } from "../services/content.service";
export class ContentController {
    static getAllContent(req: Request, res: Response) {
        const content = ContentService.getAll({})
        res.json(content)
    }
    static getContentById(req: Request, res: Response) {
        const content = ContentService.getById(req.params.id.toString());
        res.json(content)
    }

}
