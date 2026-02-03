import { NextFunction, Request, response, Response } from 'express';
import { request } from 'http';

let requestLog: Record<string, number> = {};

export function requestLimiter (req: Request, res: Response, next: NextFunction){
    let ip: string | undefined = req.ip;
    if(ip){
        let currentRequest: number = requestLog[ip] ? requestLog[ip] + 1: 1;

        requestLog[ip] = currentRequest;

        if(currentRequest > 10){
            res.status(429).send("Too many requests for this IP");
        }
    }
    next();
}