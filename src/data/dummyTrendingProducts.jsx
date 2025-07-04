import hoodie from '../assets/hoodie.jpg';
import tote from '../assets/tote.jpg';
import sneakers from '../assets/sneakers.jpg';
import gown from '../assets/gown.jpg';
import sunglasses from '../assets/sunglasses.jpg';
import trenchcoat from '../assets/trenchcoat.jpg';
import { v4 as uuidv4 } from 'uuid';

const dummyTrendingProducts = [
    {
        id: uuidv4(),
        title: 'Urban Street Hoodie',
        price: 59.99,
        image: hoodie,
        category: 'trending',
        reviews: [
            { name: 'Alice', rating: 5, comment: 'Super comfy and stylish!', date: '2023-09-14' },
            { name: 'Bob', rating: 4, comment: 'Good quality, fits well.', date: '2023-09-15' },
        ],
    },
    {
        id: uuidv4(),
        title: 'Vintage Leather Tote',
        price: 139.99,
        image: tote,
        category: 'trending',
        reviews: [
            { name: 'Clara', rating: 5, comment: 'Love the vintage look!', date: '2023-09-14' },
            { name: 'Dan', rating: 4, comment: 'Spacious and sturdy.', date: '2023-09-15' },
        ],
    },
    {
        id: uuidv4(),
        title: 'Retro High-Top Sneakers',
        price: 99.99,
        image: sneakers,
        category: 'trending',
        reviews: [
            { name: 'Eve', rating: 5, comment: 'Very comfortable for daily wear.', date: '2023-09-14' },
            { name: 'Frank', rating: 3, comment: 'Looks great but runs a bit small.', date: '2023-09-15' },
        ],
    },
    {
        id: uuidv4(),
        title: 'Elegant Satin Gown',
        price: 209.99,
        image: gown,
        category: 'trending',
        reviews: [
            { name: 'Grace', rating: 5, comment: 'Perfect for special occasions.', date: '2023-09-15' },
            { name: 'Hannah', rating: 4, comment: 'Beautiful fabric and fit.', date: '2023-09-16' },
        ],
    },
    {
        id: uuidv4(),
        title: 'Aviator Luxe Sunglasses',
        price: 149.99,
        image: sunglasses,
        category: 'trending',
        reviews: [
            { name: 'Ivan', rating: 4, comment: 'Stylish and good UV protection.', date: '2023-09-17' },
            { name: 'Jill', rating: 5, comment: 'My favorite sunglasses!', date: '2023-09-18' },
        ],
    },
    {
        id: uuidv4(),
        title: 'Premium Wool Trench Coat',
        price: 319.99,
        image: trenchcoat,
        category: 'trending',
        reviews: [
            { name: 'Kevin', rating: 5, comment: 'Warm and elegant.', date: '2023-09-19' },
            { name: 'Lily', rating: 4, comment: 'Great quality, a bit pricey.', date: '2023-09-20' },
        ],
    },
];

export default dummyTrendingProducts;
