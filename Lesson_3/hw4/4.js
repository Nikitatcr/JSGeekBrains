const products = [
    {
        id: 3,
        price: 127,
        photos: ["1.jpg", "2.jpg"]
    },
    {
        id: 5,
        price: 499,
        photos: []
    },
    {
        id: 10,
        price: 26,
        photos: ["3.jpg"]
    },
    {
        id: 8,
        price: 78,
    },
];

const result = products.filter(i => "photos" in i && i.photos.length > 0);
console.log(result);

const productSort = products.sort(function (item1,item2) {
    return item1.price - item2.price;
});
console.log(productSort);