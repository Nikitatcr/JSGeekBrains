


const products = [
    {
        id: 3,
        price: 200,
    },
    {
        id: 4,
        price: 900,
    },
    {
        id: 1,
        price: 1000,
    },
];

products.forEach(i => {
    i.price = i.price-(i.price/100*15);
});
console.log(products);
