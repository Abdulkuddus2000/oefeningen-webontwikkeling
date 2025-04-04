import { ObjectId } from "mongodb"

export interface Pokemon{
    _id?: ObjectId;
    name: string,
    id: number,
    height: number,
    weight: number,
    image: string,
    generation: number,
    cries: string,
    types: string[]
}