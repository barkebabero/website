/* =====================================
   BAR KEBABERO
   Menu Loader
===================================== */


let menuData = null;



async function loadMenu() {

    try {


        const response = await fetch("menu.json");


        menuData = await response.json();


        localStorage.setItem(
            "menuVersion",
            menuData.version
        );


        displayCategories();

        displayProducts();



    } catch(error) {


        console.error(
            "Error loading menu:",
            error
        );


    }

}




function displayCategories(){


    const container =
        document.getElementById(
            "categories"
        );


    container.innerHTML="";


    menuData.categories.forEach(category=>{


        const button =
        document.createElement("button");


        button.className =
        "category-button";


        button.textContent =
        category.name;


        button.onclick=()=>{

            displayProducts(
                category.id
            );

        };


        container.appendChild(button);


    });


}





function displayProducts(category=null){


    const container =
    document.getElementById(
        "products"
    );


    container.innerHTML="";



    let products =
    menuData.products;



    if(category){

        products =
        products.filter(
            product =>
            product.category === category
        );

    }



    products.forEach(product=>{


        if(!product.available){

            return;

        }



        const card =
        document.createElement(
            "div"
        );


        card.className =
        "product";



        card.innerHTML = `

        <img 
        src="${product.image}"
        alt="${product.name}"
        onerror="
        this.style.display='none'
        ">


        <div class="product-content">


        <h3>
        ${product.name}
        </h3>


        <p>
        ${product.description}
        </p>


        <div class="price">

        ${product.price.toFixed(2)} €

        </div>



        <button 
        class="add-button"
        onclick="
        addToCart(${product.id})
        ">

        Añadir

        </button>


        </div>

        `;



        container.appendChild(card);



    });


}






function scrollToMenu(){


    document
    .getElementById("menu")
    .scrollIntoView({

        behavior:"smooth"

    });


}






window.onload = ()=>{

    loadMenu();

};
