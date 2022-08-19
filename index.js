

function agregar() {
    const descripcion = document.getElementById("Descripcion").value;
    const subtotal = document.getElementById("subtotal").value;

    if (descripcion && subtotal) {

        const compra = document.getElementById("Compra");
        const venta = document.getElementById("Venta");
    
        const basico = document.getElementById("Basico");
        const minimo = document.getElementById("Minimo");
    
        const subtotalInt = parseInt(subtotal)
    
    
        const transaccion = compra.checked ? compra.value : venta.value;
    
        const iva = basico.checked ? 0.22 : minimo.checked ? 0.10 : 0;
    
        let iva2 = Math.trunc(subtotalInt * iva);
    
        let total = Math.trunc(subtotalInt + iva2);
    
    
        let append = `
            <tr>
                <td>${descripcion}</td>
                <td>${transaccion}</td>
                <td>${subtotal}</td>
                <td>${iva2}</td>
                <td>${total}</td>
            </tr>
        `
        document.getElementById("t-body").innerHTML += append;
    }
    else alert("Debe ingresar una descripcion y un subtotal")
    
    document.getElementById("formulario").reset();

}