

const listaImagenes = document.querySelectorAll(".galeria .contenedor article div img");

const dialog = document.querySelector("#imagenGrande");

const imgDialog = dialog.querySelector("img");


listaImagenes.forEach( imagen => {

	imagen.addEventListener("click", function() {

		imgDialog.setAttribute("src",imagen.getAttribute("src"));

	})

})