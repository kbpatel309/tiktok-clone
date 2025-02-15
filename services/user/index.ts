import { sanity } from "@/sanity/lib/client";
import { Decoded } from "../auth";

export async function createUser(decodedUser: Decoded) {
    const doc = {
        _type: "user",
        _id: decodedUser.sub,
        name: decodedUser.name,
        email: decodedUser.email,
        picture_url: decodedUser.picture
    }
    const user = await sanity.createIfNotExists(doc)
    return user as User
}