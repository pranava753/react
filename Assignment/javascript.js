const name = document.querySelectorAll(".name");
const price = document.querySelectorAll("#price");
const button = document.querySelectorAll("button");
const cart = []
const addToCart = () => {
    for (var i = 0; i < 1; i++) {
        cart.push(name[i].innerText)
        cart.push(parseInt(price[i].innerText))
    }
    console.log(cart)
}