export class BookModel {
    id: number;
    code: string;
    title: string;
    price: number;
    categoryId: number;

    constructor(code: string, title: string, price: number, categoryId: number) {
        this.code = code;
        this.title = title;
        this.price = price;
        this.categoryId = categoryId;
    }
}