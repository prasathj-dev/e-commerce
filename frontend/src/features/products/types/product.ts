import type { Rating } from "./rating"

export type Product = {
    id: string,
    image: string,
    name: string,
    rating: Rating,
    priceCents: number,
    keywords: string[]
}
