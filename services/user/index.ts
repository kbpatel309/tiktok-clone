import { sanity } from "@/sanity/lib/client";

export async function createUser(decodedUser: Decoded) {
    sanity.createIfNotExists()
}