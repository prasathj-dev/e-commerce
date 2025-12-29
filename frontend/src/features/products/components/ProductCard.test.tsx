import { describe, expect, it } from "vitest";
import { render, screen, } from "@testing-library/react";
import ProductCard from "./ProductCard";


describe('Product Card Component', () => {

    const product = {
        "keywords": [
            "shorts",
            "apparel",
            "womens"
        ],
        "id": "82bb68d7-ebc9-476a-989c-c78a40ee5cd9",
        "image": "images/products/women-summer-jean-shorts.jpg",
        "name": "Women's Summer Jean Shorts",
        "rating": {
            "stars": 4,
            "count": 160
        },
        "priceCents": 1699,
        "createdAt": "2025-11-24T19:40:59.890Z",
        "updatedAt": "2025-11-24T19:40:59.890Z"
    };

    it('displays the product detaios correctly', () => {
        render(<ProductCard product={product} key={product.id} />);
        expect(screen.getByText(`Women's Summer Jean Shorts`)).toBeCalled();
    });


});
