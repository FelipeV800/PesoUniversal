var pesoUsuario = document.getElementById("textoPeso");
var planetaUsuario = document.getElementById("textoPlaneta");
var calcularBtn = document.getElementById("botonCalcular");
var gravedades = {
    GSOL: 274,
    GMERCURIO: 3.7,
    GVENUS: 8.9,
    GTIERRA: 9.8,
    GLUNA: 1.6,
    GMARTE: 3.7,
    GJUPITER: 24.8,
    GSATURNO: 10.4,
    GURANO: 8.9,
    GNEPTUNO: 11.2,
    GPLUTON: 0.6
};

calcularBtn.addEventListener("click", calcularPeso);

function calcularPeso() {
    var pesoFinal;
    var pesoInicial = parseInt(pesoUsuario.value);
    var planeta;

    if (planetaUsuario.value == 1) {
        pesoFinal = pesoInicial * gravedades.GSOL / gravedades.GTIERRA;
        planeta = "El Sol"
        document.write("<h1>Tu peso en " + planeta + " es " + pesoFinal + " Kilos<h1>");
    } else if (planetaUsuario.value == 2) {
        pesoFinal = pesoInicial * gravedades.GMERCURIO / gravedades.GTIERRA;
        planeta = "Mercurio"
        document.write("<h1>Tu peso en " + planeta + " es " + pesoFinal + " Kilos<h1>");
    } else if (planetaUsuario.value == 3) {
        pesoFinal = pesoInicial * gravedades.GVENUS / gravedades.GTIERRA;
        planeta = "Venus"
        document.write("<h1>Tu peso en " + planeta + " es " + pesoFinal + " Kilos<h1>");
    } else if (planetaUsuario.value == 4) {
        document.write("<h1>Tu peso en la tierra es el mismo pendejin<h1>");
    } else if (planetaUsuario.value == 5) {
        pesoFinal = pesoInicial * gravedades.GLUNA / gravedades.GTIERRA;
        planeta = "La Luna"
        document.write("<h1>Tu peso en " + planeta + " es " + pesoFinal + " Kilos<h1>");
    } else if (planetaUsuario.value == 6) {
        pesoFinal = pesoInicial * gravedades.GMARTE / gravedades.GTIERRA;
        planeta = "Marte"
        document.write("<h1>Tu peso en " + planeta + " es " + pesoFinal + " Kilos<h1>");
    } else if (planetaUsuario.value == 7) {
        pesoFinal = pesoInicial * gravedades.GJUPITER / gravedades.GTIERRA;
        planeta = "Jupiter"
        document.write("<h1>Tu peso en " + planeta + " es " + pesoFinal + " Kilos<h1>");
    } else if (planetaUsuario.value == 8) {
        pesoFinal = pesoInicial * gravedades.GSATURNO / gravedades.GTIERRA;
        planeta = "Saturno"
        document.write("<h1>Tu peso en " + planeta + " es " + pesoFinal + " Kilos<h1>");
    } else if (planetaUsuario.value == 9) {
        pesoFinal = pesoInicial * gravedades.GURANO / gravedades.GTIERRA;
        planeta = "Urano"
        document.write("<h1>Tu peso en " + planeta + " es " + pesoFinal + " Kilos<h1>");
    } else if (planetaUsuario.value == 10) {
        pesoFinal = pesoInicial * gravedades.GNEPTUNO / gravedades.GTIERRA;
        planeta = "Neptuno"
        document.write("<h1>Tu peso en " + planeta + " es " + pesoFinal + " Kilos<h1>");
    } else if (planetaUsuario.value == 11) {
        pesoFinal = pesoInicial * gravedades.GPLUTON / gravedades.GTIERRA;
        planeta = "Pluton"
        document.write("<h1>Tu peso en " + planeta + " es " + pesoFinal + " Kilos<h1>");
    } else {
        document.write("<h1>Aun no tengo calculos de gravedad para el planeta que escogiste<h1>");
    }
}