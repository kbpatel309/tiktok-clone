"use server"
import jwt from "jsonwebtoken"
import { createUser } from "../user";
import { cookies } from "next/headers";

const privateKey = process.env.NEXT_PUBLIC_JWT_SECRET || ""
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

    // create a token
    const token = jwt.sign({ _id: user._id }, privateKey, { expiresIn: "30d" })
    const maxAge = 60 * 60 * 60 * 24 * 30 // 30 days
    cookies().set({ name: "auth_token", value: token, maxAge })
    return user
}