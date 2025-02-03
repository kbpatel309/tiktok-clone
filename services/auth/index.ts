"use server"
import jwt from "jsonwebtoken"

export async function auth(credential: string){
    const decoded = jwt.decode(credential)
    console.log(decoded)
}