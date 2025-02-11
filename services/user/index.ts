import { sanity } from "@/sanity/lib/client";
import { Decoded } from "../auth";

export async function createUser(decodedUser: Decoded) {
    sanity.createIfNotExists()
}