/* =====================================
   BAR KEBABERO
   WhatsApp Orders
===================================== */


document
.addEventListener(
"DOMContentLoaded",
()=>{


document
.getElementById(
"sendWhatsapp"
)
.onclick=
sendWhatsappOrder;



});





function sendWhatsappOrder(){



const accepted =
document
.getElementById(
"privacyCheck"
)
.checked;



if(!accepted){


alert(
"Debes aceptar la política de privacidad."
);


return;


}



if(cart.length===0){


alert(
"El carrito está vacío."
);


return;


}




let message =

`*Bar Kebabero*

Pedido:

`;



let total=0;



cart.forEach(item=>{


message +=

`${item.quantity} x ${item.name}
`;



total +=
item.price *
item.quantity;



});




message +=

`
Total:
${total.toFixed(2)} €

`;



const name =
document
.getElementById(
"customerName"
)
.value;



const notes =
document
.getElementById(
"customerNotes"
)
.value;




message +=

`
Cliente:
${name}

Notas:
${notes}

`;





const phone =
"34123456789";



const url =

"https://wa.me/"
+
phone
+
"?text="
+
encodeURIComponent(
message
);



window.open(
url,
"_blank"
);





}
