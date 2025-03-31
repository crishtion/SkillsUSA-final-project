const putInCart = document.getElementsByClassName("shopping-icon");
const numItems = document.getElementById("items-in-cart");
let itemsInCart = sessionStorage.getItem("items-stored");
numItems.innerHTML = sessionStorage.getItem("items-stored")

putInCart[0].addEventListener("click", ()=>{
    itemsInCart++;
    numItems.innerHTML = sessionStorage.getItem("items-stored")
    console.log(itemsInCart)

    sessionStorage.setItem('items-stored', itemsInCart)
})
putInCart[1].addEventListener("click", ()=>{
    itemsInCart++;
    numItems.innerHTML = itemsInCart
    console.log(itemsInCart)

    sessionStorage.setItem('items-stored', itemsInCart)
})
putInCart[2].addEventListener("click", ()=>{
    itemsInCart++;
    numItems.innerHTML = itemsInCart
    console.log(itemsInCart)

    sessionStorage.setItem('items-stored', itemsInCart)
})
putInCart[3].addEventListener("click", ()=>{
    itemsInCart++;
    numItems.innerHTML = itemsInCart
    console.log(itemsInCart)

    sessionStorage.setItem('items-stored', itemsInCart)
})
putInCart[4].addEventListener("click", ()=>{
    itemsInCart++;
    numItems.innerHTML = itemsInCart
    console.log(itemsInCart)

    sessionStorage.setItem('items-stored', itemsInCart)
})
putInCart[5].addEventListener("click", ()=>{
    itemsInCart++;
    numItems.innerHTML = itemsInCart
    console.log(itemsInCart)

    sessionStorage.setItem('items-stored', itemsInCart)
})
putInCart[6].addEventListener("click", ()=>{
    itemsInCart++;
    numItems.innerHTML = itemsInCart
    console.log(itemsInCart)

    sessionStorage.setItem('items-stored', itemsInCart)
})
putInCart[7].addEventListener("click", ()=>{
    itemsInCart++;
    numItems.innerHTML = itemsInCart
    console.log(itemsInCart)

    sessionStorage.setItem('items-stored', itemsInCart)
})
putInCart[8].addEventListener("click", ()=>{
    itemsInCart++;
    numItems.innerHTML = itemsInCart
    console.log(itemsInCart)

    sessionStorage.setItem('items-stored', itemsInCart)
})
putInCart[9].addEventListener("click", ()=>{
    itemsInCart++;
    numItems.innerHTML = itemsInCart
    console.log(itemsInCart)

    sessionStorage.setItem('items-stored', itemsInCart)
})



