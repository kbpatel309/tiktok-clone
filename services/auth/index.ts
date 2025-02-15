"use server"
import jwt from "jsonwebtoken"

export type Decoded = {
    email: string;
    name: string;
    picture: string;
    sub: string; // id
}

export async function auth(credential: string){
    const decoded = jwt.decode(credential)
    if(!decoded) return
    const user = await createUser(decoded as Decoded)
    if(!user) return
    // create token
}