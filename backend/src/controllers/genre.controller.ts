import { Request, Response } from "express"


export class GenreController {
    static getGenre(req: Request, res: Response){
        res.json({
            message: `get genre`
        }
        )
    }
}
