// object property shorthand

// for example we want to create an object with different values inside that object
// the process we follow now is

const name = 'kartikey'
const age = 26

const user = {
    name:name,
    age:age,
    location: "New Delhi"

}

console.log(user)

// better way of performing this

const user1 = {
    name,
    age,
    location: "Mew Delhi"
}
console.log(user1)


// object destructuring

// creating an object

const product = {
    label:"Notebook",
    price:100,
    stock:1120,
    salePrice:undefined
}

// old way of fetching details

const oldWayPrice = product.price
const oldWayStock = product.stock
const oldWayRating = product.rating
console.log(oldWayPrice)
console.log(oldWayStock)
console.log(oldWayRating)


// better and easy way to remove extra code using object destructuring

// const {price,stock,label,salePrice,rating} = product

// console.log(price)
// console.log(label)

// if we get another value that is not defined in the object, we can just call it in destructuring
// console.log(rating)

// if we want to rename the variable when fetching a value from the object

const {price:productPrice,stock,label,salePrice,rating} = product
console.log(productPrice)
console.log(label)
console.log(rating)
// desctructure the object value as a param in the function
const transaction = (type,{label,stock})=>{
    console.log(type,label,stock)
}

transaction("Order",product)
