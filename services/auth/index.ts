"use server"
import jwt from "jsonwebtoken"

export type Decoded = {
    email: string;
    name: string;
    picture: string;
    sub: string;
}

export async function auth(credential: string){
    const decoded = jwt.decode(credential)
    if(!decoded) return
    createUser(decoded)
    // create user
        // create user only if it doesn't exist
        // if user exists, don't create it
    // create token
}