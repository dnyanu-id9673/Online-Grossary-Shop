let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: 'Tomato',
        images: '11.jpg',
        price: 100,
        
    },
    {
        id: 2,
        name: 'Brinjal',
        images: 'o.jpg',
        price: 60,
    },
    {
        id: 3,
        name: 'Drumstick',
        images: 'j.jpg',
        price: 100
    },
    {
        id: 4,
        name: 'Green Bean',
        images: 'we.jpg',
        price:    60
    },
    {
        id: 5,
        name: 'PRODUCT NAME 5',
        images: 'e.jpg',
        price:  70
    },
    {
        id: 6,
        name: ' Broccoli',
        images: 's.jpg',
        price:  90
    },
    {
        id: 7,
        name: ' Pumkin',
        images: '12.jpg',
        price:  100
    },
    {
        id: 8,
        name: ' Radish',
        images: 'g.jpg',
        price: 120 
    },
    {
        id: 9,
        name: ' Corn',
        images: '7o.jpg',
        price:  80
    },
    {
        id: 10,
        name:  ' Garlic',
        images: 'v.png',
        price:  50
    },
    {
        id: 11,
        name: ' Potato',
        images: '32.jpg',
        price: 80
    },
    {
        id: 12,
        name: ' Cabbage',
        images: '15.webp',
        price: 70
    } 
    ,
    {
        id: 13,
        name: 'Dragonrfruit',
        images: 'f11.jpg',
        price: 1200  ,
        
    },
    {
        id: 2,
        name: 'Muskmelon ',
        images: 'f10.webp',
        price: 120000
    },
    {
        id: 3,
        name: 'PineApple',
        images: 'f9.jpg',
        price: 220 
    },
    {
        id: 4,
        name: 'Orange',
        images: 'f8.jpg',
        price:   123 
    },
    {
        id: 5,
        name: ' Papaya',
        images: 'f7.webp',
        price: 320 
    },
    {
        id: 6,
        name: ' Mango ',
        images: 'f6.jpg',
        price: 120 
    },
    {
        id: 7,
        name: ' Pumkin ',
        images: '12.jpg',
        price: 120 
    },
    {
        id: 8,
        name:  'Watermelon',
        images: 'f5.jpg',
        price: 120 
    },
    {
        id: 9,
        name: ' Kiwi',
        images: 's4.jpg',
        price: 120
    },
    {
        id: 10,
        name: 'Apple',
        images: 'f3.jpg',
        price: 120 
    },
    {
        id: 11,
        name: ' Pomegranate',
        images: 'f2.jpeg',
        price: 120 
    },
    {
        id: 12,
        name: ' Strawberry ',
        images: 'f1.webp',
        price: 120 
    } ,
    {
        id: 1,
        name: ' Eggs',
        images: 'p1.jpg',
        price: 120 ,
        
    },
    {
        id: 2,
        name: 'PRODUCT NAME 2',
        images: 'p2.webp',
        price: 120 
    },
    {
        id: 3,
        name: 'PRODUCT NAME 3',
        images: 'p3.jpg',
        price: 220 
    },
    {
        id: 4,
        name: 'PRODUCT NAME 4',
        images: 'p4.jpg',
        price:   123 
    },
    {
        id: 5,
        name: 'PRODUCT NAME 5',
        images: 'p5.jpg',
        price: 320 
    },
    {
        id: 6,
        name: 'PRODUCT NAME 5',
        images: 'p6.jpg',
        price: 320 
    }


];
let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="images/${value.images}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
        
            <button onclick="addToCard(${key})"><span id="addToCartButton">Add To Cart</span></button>`;
        
        list.appendChild(newDiv);
    })
}



  

 
function toggle(key){
    const wish= document.querySelectorAll('#heart-icon')[key];

    if (wish.style.color === "red") {
      wish.style.color= "gray";
}
else{
    wish.style.color = "red";
}
}
 

 
initApp();
function addToCard(key){
    if(listCards[key] == null){
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}


 
 
 




function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="images/${value.images}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}


// 2222222222222222222like
 
 

var wish = document.getElementById('wish');
function Toggle1(){
    if (wish.style.color === 'red') {
      wish.style.color= "gray"
}
else{
    wish.style.color = "red";
}
}
 

var wish2 = document.getElementById('wish2');
function Toggle2(){
    if (wish2.style.color === 'red') {
      wish2.style.color= "gray"
}
else{
    wish2.style.color = "red";
}
}


var wish3 = document.getElementById('wish3');
function Toggle3(){
    if (wish3.style.color === 'red') {
      wish3.style.color= "gray"
}
else{
    wish3.style.color = "red";
}
}

var wish4 = document.getElementById('wish4');
function Toggle4(){
    if (wish4.style.color === 'red') {
      wish4.style.color= "gray"
}
else{
    wish4.style.color = "red";
}
}

var wish5 = document.getElementById('wish5');
function Toggle5(){
    if (wish5.style.color === 'red') {
      wish5.style.color= "gray"
}
else{
    wish5.style.color = "red";
}
}

var wish6 = document.getElementById('wish6');
function Toggle6(){
    if (wish6.style.color === 'red') {
      wish6.style.color= "gray"
}
else{
    wish6.style.color = "red";
}
}

// order
document.getElementById("orderButton").addEventListener("click", function() {
    document.getElementById("messageArea").innerHTML = "<p style='color:green;'>Order Successfully!</p>";
});