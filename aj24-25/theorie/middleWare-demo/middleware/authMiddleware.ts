import {NextFunction, Request, Response} from "express";

export function authMiddleware(req: Request, res: Response, next: NextFunction) {
    let token: string | undefined = req.headers.authorization;
    
    if (!token){
        return res.status(401).json({ message: "Please provide token" });
    }

    token = token.replace("Bearer", "");

    if (token === "Bearer test123") {
        next();
    }else{
        res.status(401).json({ message: "Unauthorized" });
    }
}