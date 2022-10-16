const cardsData = [
["./Assets/Images/BuenosAiresNocturna.jpg", "./teatros.html", "Noche de teatro y cena", "Una maravillosa noche disfrutando de una buena obra de teatro seguida de la cena en un restaurante del centro."],
["./Assets/Images/img5.jpg", "./LaEstrella.html", 'Tour estancia "La estrella"', 'Exquisito entorno natural ideal para el relax, cocina gourmet y atención personalizada'],
["./Assets/Images/17.jpg", "./DeltaTour.html", 'Descubra el Tigre a bordo de un barco', 'Recorrido turístico por la ciudad y paseo en barco por el Delta'],
["./Assets/Images/img1.jpg", "./tourGaucho.html", 'Tour Gaucho de Un Día a Una Estancia', 'Descubra nuestras tradiciones de la mano de bailarines y jinetes profesionales y además degustando la mejor carne argentina']
]

// Para pruebas de footer con menos cards
// const cardsData = [
//     ["./Assets/Images/BuenosAiresNocturna.jpg", "./teatro.html", "Noche de teatro y cena", "Una maravillosa noche disfrutando de una buena obra de teatro seguida de la cena en un restaurante del centro."],
//     ["./Assets/Images/img5.jpg", "./estancia.html", 'Tour "Estancia La estrella"', 'Exquisito entorno natural ideal para el relax, cocina gourmet y atención personalizada']
//     ]


//recuperar el padre de las cards (<section class="multiple-product-container">)
const contenedor = document.querySelector(".multiple-product-container");

// recorrer los arrays. Para cada elemento armar una card y agregarla al contenedor
for (i=0; i<cardsData.length; i++) {
    var card = document.createElement('a');
    card.setAttribute('href', cardsData[i][1]);

    var singleProduct = document.createElement('article');
    singleProduct.classList.toggle("single-product-container");

    var productimg = document.createElement('div');
    productimg.classList.toggle("product-img");

    productimg.setAttribute("style", "background-image: url(" + (cardsData[i][0]) + ")");

    var epigrafe = document.createElement('div');
    epigrafe.classList.toggle("epigrafe");
    epigrafe.innerHTML = `
    <h2 class="tituloCard">` +  cardsData[i][2]  +  ` </h2>
    <p>`  + cardsData[i][3] + `    </p>
    `

    contenedor.appendChild(card);
    card.appendChild(singleProduct);
    singleProduct.appendChild(productimg);
    singleProduct.appendChild(epigrafe);
}
