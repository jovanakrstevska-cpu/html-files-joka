function Product(name, category, hasDiscount, price) {
    this.name = name;
    this.category = category;
    this.hasDiscount = hasDiscount;
    this.price = price;
}
//capital letter tells this is constructor function
//"this" means that new object will be created
//the object we are will have property called "name, category.."

let products = [
    new Product("Laptop", "Electronics", true, 1000),
    new Product("Shirt", "Clothing", false, 50),
    new Product("Phone", "Electronics", true, 500),
    new Product("Shoes", "Footwear", false, 80),
    new Product("Headphones", "Electronics", true, 200),
    new Product("Jacket", "Clothing", false, 150),
    new Product("Watch", "Accessories", true, 300),
    new Product("Bag", "Accessories", false, 120),
    new Product("Tablet", "Electronics", true, 400),
    new Product("Apple", "Food", false, 100),
    new Product("Camera", "Electronics", true, 800),
    new Product("Jeans", "Clothing", false, 70),
    new Product("Lasagna", "Food", true, 90),
    new Product("Belt", "Accessories", false, 40),
    new Product("Pizza", "Food", true, 300)
];

console.log(products);
console.log(products.length);

//the products with a price greater than 20
let expensiveProduct = products.filter(product => product.price > 20);
console.log(expensiveProduct);

//the price of all products that have discount
let discountedPrices = products
.filter(product => product.hasDiscount)
.map(product => product.price);

console.log(discountedPrices);

//the names of all products in the "Food" category that have a discount
let foodDiscountNames = products
    .filter(product => product.category === "Food" && product.hasDiscount === true)
    .map(product => product.name);

console.log(foodDiscountNames);

//the name and price of all products with name starting with a vowel(A, E, I, O, U), that are not on discount
 let result = products
 .filter(p => {
    let firstLetter = p.name[0].toLowerCase();
    let vowels= ['a', 'e', 'i', 'o', 'u'];

    return vowels.includes(firstLetter) && !p.hasDiscount;
 })
 .map(p => ({
    name: p.name,
    price: p.price
 }));

    console.log(result);




