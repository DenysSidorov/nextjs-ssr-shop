export interface ICartItem {
    id?: number;
    name: string;
    model: string;
    size: number[];
    count: number;
    comments: IComment[];
    views: number;
    likes: number;
    price: number;
    photo: string[];
    code: string | number;
    ['desc-short']: string;
    ['desc-full']: string;
    tags: string[];
    sail: number;
    category: string[];
    isExists: boolean;
    producer: string;
    isNewGood: boolean;
}

export interface IComment {
    _id: string | number;
    name: string;
    message: string;
    date: string;
}
