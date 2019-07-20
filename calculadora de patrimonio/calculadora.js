class Capital{

    constructor(tipo, categoria, articulo, valor){
        this.tipo=tipo;
        this.categoria=categoria;
        this.articulo=articulo;
        this.valor=valor;

    }
}

class Interfaz{

    agregarCapital(capital){
        const tabla = document.getElementById('tabla');
        const elemento = document.createElement('div');
        elemento.innerHTML = `
        <div class="card text-center mb-1">
            <div class="card-body">
                <strong>Capital tipo</strong>: ${capital.tipo}
                <strong>Categoria</strong>: ${capital.categoria}
                <strong>Articulo</strong>: ${capital.articulo}
                <strong>Valor</strong>: ${capital.valor}
                <a href="#" class="btn btn-danger" name="eliminar">Eliminar </a>

                </div>
        
        </div>
        
        
        `;
        tabla.appendChild(elemento);
    }
    eliminarCapital(elemento){
        if(elemento.name === 'eliminar'){
            elemento.parentElement.parentElement.parentElement.remove();
        }
    }
    restablecerFormulario(){
        document.getElementById('formulario').reset();
    }
}

//Eventos del DOM
document.getElementById('formulario')
.addEventListener('submit', function(e) {

    const tipo = document.getElementById('tipo').value;
    const categoria = document.getElementById('categoria').value;
    const articulo = document.getElementById('articulo').value;
    const valor = document.getElementById('valor').value;

    const capital = new Capital(tipo,categoria,articulo,valor);
    const interfaz = new Interfaz();
    interfaz.agregarCapital(capital);
    interfaz.restablecerFormulario();


    e.preventDefault();
});

document.getElementById('tabla').addEventListener('click', function(e) {
    const interfaz = new Interfaz();
    interfaz.eliminarCapital(e.target);

});