
let  totalventas = 0;
let  totalcompras = 0;

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
    
        if (transaccion === compra.value) {
            totalcompras += subtotalInt;
        }
        else {
            totalventas += subtotalInt;
        }

        const iva = basico.checked ? 0.22 : minimo.checked ? 0.10 : 0;
    
        let iva2 = subtotalInt * iva;
    
        let total = Math.round(subtotalInt + iva2);
    
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

    total(totalventas, totalcompras);

}

document.addEventListener("DOMContentLoaded", function() {
    total(totalventas, totalcompras);
})

function total(ventas, compras) {
    let totalC_V = `
    <label class="mr">Total Ventas $${ventas}</label>
    <label>Total Compras $${compras}</label>
    `
    document.getElementById("total-todo").innerHTML = totalC_V;
}

