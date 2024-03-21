export type CategoryItemType = {
    id: string | number;
    title: string;
    imageUrl: string;
};

export type ProductType = {
    id: number | string,
    name: string,
    imageUrl: string,
    price: number
}

export type CartItemType = {
    id: number,
    name: string,
    price: number,
    imageUrl: string,
    quantity: number
}