import {createClient,} from "next-sanity";

export const client =  createClient({
    projectId: "e2chxc5e",
    dataset: "production",
    apiVersion: "2024-01-01",
    useCdn: false,
})