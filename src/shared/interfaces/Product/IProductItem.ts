import IProductImage from './IProductImage';

export default interface IProductItem {
    title: string;
    price: string;
    image: IProductImage;
    href: string;
}