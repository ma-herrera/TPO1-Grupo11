const header = document.querySelector("header");
header.innerHTML = 
`<div class="logo">
    <a href="./index.html"><img src="./Assets/Images/Recurso 5.svg" alt="Logo de Eleven viajes"  width="80 px" height="75px"></a>
    <p>El destino de tus sueños</p>
</div>


<label class="btn-hamburguesa menu_hamburger">
    <i class="material-symbols-outlined hamburger__img"> menu </i>
</label>

<nav>
    <ul class="menu__links navul">

        <li class="menu__item menu__item--show">
            <a class="menu__link" id="excursiones">Excursiones</a>
            <ul class="menu__nesting">
                <li class="menu__inside">
                    <a class="menu__link menu__link--inside" href="./teatros.html">Teatro</a>
                </li>
                <li class="menu__inside">
                    <a class="menu__link menu__link--inside" href="./LaEstrella.html">Estancia "La estrella"</a>
                </li>
                <li class="menu__inside">
                    <a class="menu__link menu__link--inside" href="./DeltaTour.html">Tigre</a>
                </li>
                <li class="menu__inside">
                    <a class="menu__link menu__link--inside" href="./tourGaucho.html">Tour gaucho</a>
                </li>
            </ul>
        </li>

        <li class='menu__item'>
            <a class="menu__link" href="./formularioDeContacto.html">Contacto</a>
        </li>

        <li class='menu__item'>
            <a class="menu__link" href="./blog.html">Blog</a>
        </li>

        <li class='menu__item'>
            <a class="menu__link" href="./nosotros.html">Nosotros</a>
        </li>

        <li class='menu__item'>
            <a class="menu__link" href="./index.html"><span class="material-symbols-outlined">home</span></a>
        </li>
    </ul>
</nav>`

