/* Lógica para manejo de menúes desplegables */

(function(){
    const listElements = document.querySelectorAll('.menu__item--show');
    const list = document.querySelector('.navul');
    const menu = document.querySelector('.btn-hamburguesa');
    const menuPpal = document.querySelector('header nav');

    // para cada elemento del menu ppal agrego un listener para "click"
    const addClick = ()=>{
        listElements.forEach(element =>{
            element.addEventListener('click', ()=>{
                //obtener .menu__nesting (es el 2do hijo, menu__item--show tiene dos hijos, el primero es la etiqueta <a>, el segundo la ul (.menu__nesting))
                let subMenu = element.children[1];
                let visibility = "hidden";
                element.classList.toggle('menu__item--active');
                // Opero sobre el menú anidado:
                //Si está cerrado --> quiero abrirlo
                //Si está abierto --> quiero cerrarlo
                const cssObj = window.getComputedStyle(subMenu, null);
                if (cssObj.getPropertyValue("visibility") == "hidden") {
                    visibility = "visible";
                }

                subMenu.style.visibility = visibility;

            });
        });
    }

    const deleteStyle = ()=>{
        listElements.forEach(element=>{

            if(element.children[1].getAttribute('style')){
                element.children[1].removeAttribute('style');
                element.classList.remove('menu__item--active');
            }
        });
    }

    const addMostrar = ()=>{
            menuPpal.classList.toggle('mostrar');
    }


    if(window.innerWidth < 768){
            menu.addEventListener('click', addMostrar);
    }

    if(window.innerWidth <= 768){
        addClick();
    }

    window.addEventListener('resize', ()=>{
        if(window.innerWidth >= 768){
            deleteStyle();
            if(menuPpal.classList.contains('mostrar'))
                menuPpal.classList.remove('mostrar');

        }else{
            // menu.addEventListener('click', ()=> menuPpal.classList.toggle('mostrar'));            
            menu.addEventListener('click', addMostrar);
            addClick();
        }
    });


})();

