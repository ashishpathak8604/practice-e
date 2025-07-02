import product1 from '../assets/product1.jpg';
import product2 from '../assets/product2.jpg';
import product3 from '../assets/product3.jpg';
import product4 from '../assets/product4.jpg';

const dummyNewArrivalProducts = [

    {
      id: '1',
      title: 'Classic Denim Jacket',
      price: 79.99,
      description:
        'A classic denim jacket with modern fitting, perfect for all seasons.',
      category: 'men',
      image: product1,
      reviews: [
        {
          name: 'John Doe',
          rating: 4.5,
          comment: 'Great fit and quality!',
          date: 'May 10, 2024',
        },
      ],
    },
    {
      id: '2',
      title: 'Leather Handbag',
      price: 129.99,
      description:
        'Elegant leather handbag crafted with premium materials for durability and style. Spacious interior with refined stitching.',
      category: 'women',
      image: product2,
      reviews: [
        {
          name: 'Emily Brown',
          rating: 5.0,
          comment: 'Absolutely love this handbag! Perfect for everyday use.',
          date: 'May 11, 2024',
        },
      ],
    },
    {
      id: '3',
      title: 'Modern Sneakers',
      price: 89.99,
      description:
        'Lightweight, breathable sneakers designed for everyday comfort with a sleek urban style. Perfect for both sports and casual wear.',
      category: 'unisex',
      image: product3,
      reviews: [
        {
          name: 'Jane Smith',
          rating: 4.0,
          comment: 'Very comfortable and stylish!',
          date: 'May 12, 2024',
        },
      ],
    },
    {
      id: '4',
      title: 'Elegant Satin Gown',
      price: 189.99,
      description:
        'A stunning satin gown featuring a flowing silhouette and luxurious fabric. Ideal for evening events, weddings, and formal occasions.',
      category: 'women',
      image: product4,
      reviews: [
        {
          name: 'Alice Johnson',
          rating: 5.0,
          comment: 'Absolutely gorgeous! Perfect for my wedding.',
          date: 'May 15, 2024',
        },
      ],
    },
 
];

export default dummyNewArrivalProducts;
