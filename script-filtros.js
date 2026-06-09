document.addEventListener('DOMContentLoaded', () => {
    // Capturamos los elementos de la interfaz
    const filtroCategoria = document.getElementById('filtro-categoria');
    const filtroCondicion = document.getElementById('filtro-condicion');
    const filtroPrecio = document.getElementById('filtro-precio');
    const btnLimpiar = document.getElementById('btn-limpiar');
    const contenedorSinResultados = document.getElementById('sin-resultados');
    
    // Capturamos todas las tarjetas de autos que existan en el HTML
    const tarjetasAutos = document.querySelectorAll('.card-auto');

    // Función principal que filtra
    function filtrarStock() {
        const catSeleccionada = filtroCategoria.value;
        const condSeleccionada = filtroCondicion.value;
        const precioSeleccionado = filtroPrecio.value;
        
        let contadorVisibles = 0;

        tarjetasAutos.forEach(tarjeta => {
            // Leemos las propiedades data- de cada auto
            const autoCat = tarjeta.getAttribute('data-categoria');
            const autoCond = tarjeta.getAttribute('data-condicion');
            const autoPrecio = tarjeta.getAttribute('data-precio');

            // Evaluamos si cumple con los tres filtros a la vez
            const coincideCategoria = (catSeleccionada === 'todos' || autoCat === catSeleccionada);
            const coincideCondicion = (condSeleccionada === 'todos' || autoCond === condSeleccionada);
            const coincidePrecio = (precioSeleccionado === 'todos' || autoPrecio === precioSeleccionado);

            if (coincideCategoria && coincideCondicion && coincidePrecio) {
                tarjeta.style.display = 'flex'; // Muestra la tarjeta
                contadorVisibles++;
            } else {
                tarjeta.style.display = 'none';  // Oculta la tarjeta
            }
        });

        // Si ningún auto coincide, mostramos el cartel de error/aviso
        if (contadorVisibles === 0) {
            contenedorSinResultados.style.display = 'block';
        } else {
            contenedorSinResultados.style.display = 'none';
        }
    }

    // Escuchamos cuando el usuario cambia cualquier opción del menú desplegable
    filtroCategoria.addEventListener('change', filtrarStock);
    filtroCondicion.addEventListener('change', filtrarStock);
    filtroPrecio.addEventListener('change', filtrarStock);

    // Botón para resetear todos los filtros a la vez
    btnLimpiar.addEventListener('click', () => {
        filtroCategoria.value = 'todos';
        filtroCondicion.value = 'todos';
        filtroPrecio.value = 'todos';
        filtrarStock();
    });
});