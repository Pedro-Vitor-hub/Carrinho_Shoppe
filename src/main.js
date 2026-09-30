import createItem from "./service/Item.js";
import * as cartService from "./service/Cart.js";

const myCart = [];

console.log("Welcome to the your Shopee Cart!");

const item_one = await createItem("Xaiomi Poco C85", 1150.00, 1);
const item_two = await createItem("Placa Mãe b450M", 685.70, 1);

await cartService.addItemInCart(myCart, item_one);
await cartService.addItemInCart(myCart, item_two);

await cartService.removeItemInCart(myCart, item_two);

await cartService.displayCart(myCart);

// await cartService.deleteItemInCart(myCart, item_two.name);

await cartService.calcTotalItemsToCart(myCart);