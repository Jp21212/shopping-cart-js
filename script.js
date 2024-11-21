let shoppingCart = []; //Creates Array for Shopping cart
let appleButton = document.querySelector('#add-apple'); //gets apple button
let cartList = document.querySelector('#cart-items');  // gets cart ul
let blueberryButton = document.querySelector('#add-blueberry'); //gets blueberry button
let kiwiButton = document.querySelector('#add-kiwi'); //gets kiwi button


console.log(shoppingCart);

appleButton.addEventListener("click", ()=>{
    shoppingCart.push("Apple");
    let li = document.createElement("li");
    li.textContent= "Apple";
    cartList.appendChild(li);
});



kiwiButton.addEventListener("click", ()=>{
    shoppingCart.push("Kiwi");
    let li = document.createElement("li");
    li.textContent= "Kiwi";
    cartList.appendChild(li);
});



blueberryButton.addEventListener("click", ()=>{
    shoppingCart.push("Blueberry");
    let li = document.createElement("li");
    li.textContent= "Blueberry";
    cartList.appendChild(li);
});