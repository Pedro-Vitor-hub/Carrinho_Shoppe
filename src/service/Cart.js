
// Adicionar um item
async function addItemInCart(userCart, item) {
    userCart.push(item);
}

// Deletar item carrinho
async function deleteItemInCart(userCart, name) {
    const index = userCart.findIndex((item) =>  item.name === name);

    if( index != -1){
        userCart.splice(index, 1);
    }
}

// Exibir lista de items 
async function displayCart(userCart) {
    console.log("\nShopee Cart List");
    userCart.forEach((item, index) => {
        console.log(`${index + 1}. ${item.name} - ${item.price} | ${item.quantity} | SubTotal: ${item.subtotal()}`);
    });
}

// Remover um item
async function removeItemInCart(userCart, item) {
    const indexFound = userCart.findIndex((p) => p.name === item.name);

    if(indexFound == -1){
        console.log("Item não encontrado!");
        return;
    }

    if(userCart[indexFound].quantity > 1){
        userCart[indexFound].quantity -= 1;
        return;
    }

    if(userCart[indexFound].quantity == 1){
        userCart.splice(indexFound, 1);
        return;
    }
}

// Calcular o total
async function calcTotalItemsToCart(userCart) {
    console.log("\nShopee Cart Total IS: ");
    const result = userCart.reduce((total, item) => total + item.subtotal(), 0);
    console.log(`Total: ${result}`);
}

export { 
    addItemInCart,
    removeItemInCart,
    deleteItemInCart,
    calcTotalItemsToCart,
    displayCart
}