/**
 * Conversión de unidades de yardas, pies, pulgadas y metros.
 * @method conventirUnidades
 * @param {string} id - Id del elemento input en el html
 * @param {number} valor - Valor a convertir
 * @return 
 */

function conventirUnidades(id, valor) {
    var metro, pulgada, pie, yarda;

    if(valor.includes(",")){
        valor = valor.replace(",", ".");
    }

if(isNaN(valor)){
    alert("Se ingresó un valor incorrecto: " + id);
    metro = "";
    pulgada = "";
    pie = "";
    yarda = "";
}   else if(id == "metro") {
        metro = valor;
        pulgada = valor * 3.28084;
        pie = valor * 39.3701;
        yarda = valor * 1.09361;
    }else if(id == "pulgada") {
        pulgada = valor;
        metro = valor * 0.0254;
        pie = valor * 0.0833333;
        yarda = valor * 0.0277778;
    }else if(id == "pie") {
        pulgada = valor * 39.3701;
        metro = valor * 3.28084;
        yarda = valor * 1.09361;
    }else if(id == "yarda") {
        pulgada = valor * 39.3701;
        pie = valor * 3.28084;
        metro = valor * 1.09361;
    }

    document.lasUnidades.unid_metro.value =Math.round(metro*100)/100;
    document.lasUnidades.unid_pulgada.value = Math.round(pulgada*100)/100;
    document.lasUnidades.unid_pie.value = Math.round(pie*100)/100;
    document.lasUnidades.unid_yarda.value = Math.round(yarda*100)/100;
}

/**
 * Conversión de unidades de grados a radianes
 * @method conventirGR
 * @param {string} id - Id del elemento input en el html
 */

    function convertirGR(id) {
        let grad, rad;
        if(id == "grados") {
            grad = document.getElementById("grados").value;
            rad = grad * Math.PI / 180;
        } else if(id == "radianes") {
            rad = document.getElementById("radianes").value;
            grad = rad * 180 / Math.PI;
        }
        document.getElementById("grados").value = grad;
        document.getElementById("radianes").value = rad;
    }

function mostrar_ocultar(valorMO) {
    if(valorMO == "val_mostrar"){
        document.getElementById("divMO").style.display = "block";
    } else if(valorMO == "val_ocultar"){
        document.getElementById("divMO").style.display = "none";
    }

}

let mostrarModal = () => {
    document.getElementById("modal").style.display = "block";
}

let cerrarModal = () => {
    document.getElementById("modal").style.display = "none";
}

function calcularSuma() {
    var num1, num2;
    num1 = Number(document.getElementById("nums1").value);
    num2 = Number(document.getElementById("nums2").value);
    document.getElementById("totalS").innerHTML = num1 + num2;
}

function calcularResta() {
    var num1, num2;
    num1 = Number(document.getElementById("numr1").value);
    num2 = Number(document.getElementById("numr2").value);
    document.getElementById("totalR").innerHTML = num1 - num2;
}

function calcularMultiplicacion() {
    var num1, num2;
    num1 = Number(document.getElementById("numm1").value);
    num2 = Number(document.getElementById("numm2").value);
    document.getElementById("totalM").innerHTML = num1 * num2;
}

function calcularDivision() {
    var num1, num2;
    num1 = Number(document.getElementById("numd1").value);
    num2 = Number(document.getElementById("numd2").value);
    document.getElementById("totalD").innerHTML = num1 / num2;
}