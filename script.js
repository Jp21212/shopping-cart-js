let shoppingCart = []; //Creates Array for Shopping cart
let appleButton = document.querySelector('#add-apple'); //gets apple button
let cartList = document.querySelector('#cart-items');  // gets cart ul

console.log(shoppingCart);

appleButton.addEventListener("click", ()=>{
    shoppingCart.push("Apple");
    let li = document.createElement("li");
    li.textContent= "Apple";
    cartList.appendChild(li);
});