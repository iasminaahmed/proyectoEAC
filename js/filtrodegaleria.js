const articulos = document.querySelectorAll(".contenedor article");

const categorias = document.querySelectorAll(".enlace ul div");

categorias.forEach(categoria => {
   
    categoria.addEventListener('click' , function(){
        categorias.forEach(categoria => {
            const hr = categoria.querySelector("hr");
            hr.style.width= "0%";
            
            
        });
        const hr = categoria.querySelector("hr");
        hr.style.width= "100%";

        const filtro = categoria.getAttribute('data-filter')
        articulos.forEach(articulo => {
     
            const filtroArticulo = articulo.getAttribute('data-filter');
            
            articulo.style.display= "inline-flex";
            
        });
        if(filtro != "todas"){
            articulos.forEach(articulo => {
     
                const filtroArticulo = articulo.getAttribute('data-filter');
                if(filtroArticulo != filtro){
                    articulo.style.display= "none";
                }
            }); 
        }
        
    })
    
});
