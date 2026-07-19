/* =====================================
   BAR KEBABERO
   Shopping Cart
===================================== */


let cart =
JSON.parse(
localStorage.getItem("cart")
)
||
[];





function saveCart(){


localStorage.setItem(
"cart",
JSON.stringify(cart)
);


updateCartCount();


}




function addToCart(id){



fetch("menu.json")

.then(response=>response.json())

.then(menu=>{


const product =
menu.products.find(
p=>p.id===id
);



const existing =
cart.find(
item=>item.id===id
);



if(existing){


existing.quantity++;


}

else{


cart.push({

id:product.id,

name:product.name,

price:product.price,

quantity:1,

note:""

});


}



saveCart();



alert(
product.name+
" añadido al carrito"
);



});



}






function updateCartCount(){


const count =
cart.reduce(
(sum,item)=>
sum+item.quantity,
0
);



const element =
document.getElementById(
"cartCount"
);


if(element){

element.textContent=count;

}


}







function openCart(){


const modal =
document.getElementById(
"cartModal"
);


modal.style.display="block";


renderCart();


}







function closeCart(){


document
.getElementById(
"cartModal"
)
.style.display="none";


}






function renderCart(){



const container =
document.getElementById(
"cartItems"
);



container.innerHTML="";



let total=0;



cart.forEach(item=>{


total +=
item.price *
item.quantity;



const div =
document.createElement(
"div"
);



div.className=
"cart-item";



div.innerHTML=`

<span>

${item.name}

<br>

Cantidad:
${item.quantity}

</span>


<button onclick="
removeFromCart(${item.id})
">

❌

</button>

`;



container.appendChild(div);



});



document
.getElementById(
"cartTotal"
)
.innerHTML=

`
<h3>
Total:
${total.toFixed(2)} €
</h3>
`;



}





function removeFromCart(id){


cart =
cart.filter(
item=>item.id!==id
);


saveCart();

renderCart();


}






document
.addEventListener(
"DOMContentLoaded",
()=>{


updateCartCount();


document
.getElementById(
"cartButton"
)
.onclick=openCart;



document
.getElementById(
"closeCart"
)
.onclick=closeCart;


});
