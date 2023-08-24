document.addEventListener("DOMContentLoaded", function () {

    var itemInput = document.getElementById("item");
    var agregarButton = document.getElementById("agregar");
    var contenedorLista = document.getElementById("contenedor");
    var limpiarButton = document.getElementById("limpiar");

    function agregarItem() {
        var nuevoItem = itemInput.value;
        if (nuevoItem.trim() !== "") {
            var listItem = document.createElement("li");
            listItem.textContent = nuevoItem;
            listItem.className = "list-group-item";
            contenedorLista.appendChild(listItem);
            itemInput.value = "";

            var storedList = localStorage.getItem("Item");
            var arrayListado = storedList ? JSON.parse(storedList) : [];

            arrayListado.push(nuevoItem);
            localStorage.setItem("Item", JSON.stringify(arrayListado));
        }
    }

    function limpiarLista() {
        contenedorLista.innerHTML = "";
    }

    agregarButton.addEventListener("click", agregarItem);
    limpiarButton.addEventListener("click", limpiarLista);

});
