

function agregar() {
    const descripcion = document.getElementById("Descripcion").value;


    let append = `
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
    `
    document.getElementById("t-body").innerHTML += append;
}