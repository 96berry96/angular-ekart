export class Product{
    id: number;
    name: string;
    description:string;
    gender: string;
    brand: string;
    category: string;
    size: number[];
    color: string[];
    price: number;
    discountPrice?: number;
    imageURL: string;
    is_in_inventory: boolean;
    items_left: number;
    slug: string
}