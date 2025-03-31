import {Request, Response, NextFunction} from 'express';

export function errorMiddleware(err: Error, req: Request, res: Response, next: NextFunction) {
    res.status(500).json({ message: 'Internal Server Error' });
    console.error(err.stack);
}