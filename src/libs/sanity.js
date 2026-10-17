import {createClient} from "@sanity/client"

export const sanityClient = createClient({
    projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
    dataset: "production",
    apiVersion: "2026-10-01",
    useCdn: false,
    perspective: "published"
});