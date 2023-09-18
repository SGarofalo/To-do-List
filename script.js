let input = document.querySelector('.input');
let botonAgregar = document.querySelector('.boton-agregar');
let container = document.querySelector('.container');

class Item {
    constructor() {
    }

    crearDiv() {
        let inputItem = document.createElement('input');
        inputItem.disabled = true;
        inputItem.classList.add('item-input');
        inputItem.value = input.value;

        let div = document.createElement('div');
        div.classList.add('item');

        let botonEditar = document.createElement('button');
        botonEditar.innerHTML = "<i class='fa-solid fa-pencil'></i>";
        botonEditar.classList.add('boton-editar');
        
        let botonRemover = document.createElement('button');
        botonRemover.innerHTML = "<i class='fa-solid fa-trash-can'></i>";
        botonRemover.classList.add('boton-remover');

        div.appendChild(inputItem);
        div.appendChild(botonEditar);
        div.appendChild(botonRemover);
        container.appendChild(div);

        botonEditar.addEventListener('click', function () {
            if (inputItem.disabled === true) {
                inputItem.disabled = false;
                botonEditar.innerHTML = "<i class='fa-solid fa-pencil fa-beat'></i>";
            } else if (inputItem.disabled === false) {
                inputItem.disabled = true;
                botonEditar.innerHTML = "<i class='fa-solid fa-pencil'></i>";
            }
        });

        botonRemover.addEventListener('click', function () {
            div.remove();
        });
    }
}

function chequearInput() {
    if (input.value !== '') {
        let nuevo = new Item();
        nuevo.crearDiv();
        input.value = '';
    }
}

botonAgregar.addEventListener('click', function () {
    chequearInput();
});