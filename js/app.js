Calculadora = function() {

    this.digitos = 8;

    this.numeroAnterior = "";
    this.numeroActual = "0";
    this.operacion = "";
    this.display = document.getElementById("display");

    this.reiniciar = function() {
        this.numeroAnterior = "";
        this.numeroActual = "0";
        this.operacion = "";
        this.actualizarDisplay();
    };

    this.masMenos = function() {
        if (this.numeroActual !== "0") {
            if (this.numeroActual.indexOf("-") < 0) {
                this.numeroActual = "-" + this.numeroActual;
            } else {
                this.numeroActual = this.numeroActual.replace("-", "");
            }
            this.actualizarDisplay();
        }
    };

    this.agregarPunto = function() {
        if (this.numeroActual.indexOf(".") < 0 &&
            this.numeroActual.length < this.digitos) {
            this.numeroActual += ".";
            this.actualizarDisplay();
        }
    };

    this.agregarNumero = function(pNumero) {
        if (this.numeroActual.length < this.digitos) {
            if (this.numeroActual === "0") {
                this.numeroActual = pNumero.toString();
            } else {
                this.numeroActual += pNumero.toString();
            }
            this.actualizarDisplay();
        }
    };

    this.actualizarDisplay = function() {
        this.display.innerHTML = this.numeroActual.toString();
    };

    this.operar = function() {
        this.numeroAnterior = this.numeroActual;
        this.numeroActual = "0";
        this.actualizarDisplay();
    };

    this.sumar = function() {
        if (this.numeroActual !== "0") {
            this.operacion = "SUMAR";
            this.operar();
        }
    };

    this.restar = function() {
        if (this.numeroActual !== "0") {
            this.operacion = "RESTAR";
            this.operar();
        }
    };

    this.multiplicar = function() {
        if (this.numeroActual !== "0") {
            this.operacion = "MULTIPLICAR";
            this.operar();
        }
    };

    this.dividir = function() {
        if (this.numeroActual !== "0") {
            this.operacion = "DIVIDIR";
            this.operar();
        }
    };

    this.calcular = function() {
        if (this.operacion === "SUMAR") {
            this.numeroActual = (parseFloat(this.numeroAnterior) + parseFloat(this.numeroActual)).toString().substring(0, this.digitos);
        } else if (this.operacion === "RESTAR") {
            this.numeroActual = (parseFloat(this.numeroAnterior) - parseFloat(this.numeroActual)).toString().substring(0, this.digitos);
        } else if (this.operacion === "MULTIPLICAR") {
            this.numeroActual = (parseFloat(this.numeroAnterior) * parseFloat(this.numeroActual)).toString().substring(0, this.digitos);
        } else if (this.operacion === "DIVIDIR") {
            this.numeroActual = (parseFloat(this.numeroAnterior) / parseFloat(this.numeroActual)).toString().substring(0, this.digitos);
        }
        this.actualizarDisplay();
    };

};

var calculadora = new Calculadora();

document.getElementById("1").addEventListener("click", function() {
    calculadora.agregarNumero(1);
});

document.getElementById("1").addEventListener("mousedown", function(e) {
    e.target.style.transform = "scale(.9,.9)";
});

document.getElementById("1").addEventListener("mouseup", function(e) {
    e.target.style.transform = "scale(1,1)";
});

document.getElementById("2").addEventListener("click", function() {
    calculadora.agregarNumero();
});

document.getElementById("2").addEventListener("mousedown", function(e) {
    e.target.style.transform = "scale(.9,.9)";
});

document.getElementById("2").addEventListener("mouseup", function(e) {
    e.target.style.transform = "scale(1,1)";
});

document.getElementById("3").addEventListener("click", function() {
    calculadora.agregarNumero();
});

document.getElementById("3").addEventListener("mousedown", function(e) {
    e.target.style.transform = "scale(.9,.9)";
});

document.getElementById("3").addEventListener("mouseup", function(e) {
    e.target.style.transform = "scale(1,1)";
});

document.getElementById("4").addEventListener("click", function() {
    calculadora.agregarNumero();
});

document.getElementById("4").addEventListener("mousedown", function(e) {
    e.target.style.transform = "scale(.9,.9)";
});

document.getElementById("4").addEventListener("mouseup", function(e) {
    e.target.style.transform = "scale(1,1)";
});

document.getElementById("5").addEventListener("click", function() {
    calculadora.agregarNumero();
});

document.getElementById("5").addEventListener("mousedown", function(e) {
    e.target.style.transform = "scale(.9,.9)";
});

document.getElementById("5").addEventListener("mouseup", function(e) {
    e.target.style.transform = "scale(1,1)";
});

document.getElementById("6").addEventListener("click", function() {
    calculadora.agregarNumero();
});

document.getElementById("6").addEventListener("mousedown", function(e) {
    e.target.style.transform = "scale(.9,.9)";
});

document.getElementById("6").addEventListener("mouseup", function(e) {
    e.target.style.transform = "scale(1,1)";
});

document.getElementById("7").addEventListener("click", function() {
    calculadora.agregarNumero();
});

document.getElementById("7").addEventListener("mousedown", function(e) {
    e.target.style.transform = "scale(.9,.9)";
});

document.getElementById("7").addEventListener("mouseup", function(e) {
    e.target.style.transform = "scale(1,1)";
});

document.getElementById("8").addEventListener("click", function() {
    calculadora.agregarNumero();
});

document.getElementById("8").addEventListener("mousedown", function(e) {
    e.target.style.transform = "scale(.9,.9)";
});

document.getElementById("8").addEventListener("mouseup", function(e) {
    e.target.style.transform = "scale(1,1)";
});

document.getElementById("9").addEventListener("click", function() {
    calculadora.agregarNumero();
});

document.getElementById("9").addEventListener("mousedown", function(e) {
    e.target.style.transform = "scale(.9,.9)";
});

document.getElementById("9").addEventListener("mouseup", function(e) {
    e.target.style.transform = "scale(1,1)";
});

document.getElementById("0").addEventListener("click", function() {
    calculadora.agregarNumero();
});

document.getElementById("0").addEventListener("mousedown", function(e) {
    e.target.style.transform = "scale(.9,.9)";
});

document.getElementById("0").addEventListener("mouseup", function(e) {
    e.target.style.transform = "scale(1,1)";
});



document.getElementById("punto").addEventListener("mousedown", function(e) {
    e.target.style.transform = "scale(.9,.9)";
});

document.getElementById("punto").addEventListener("mouseup", function(e) {
    e.target.style.transform = "scale(1,1)";
});



document.getElementById("on").addEventListener("mousedown", function(e) {
    e.target.style.transform = "scale(.9,.9)";
});

document.getElementById("on").addEventListener("mouseup", function(e) {
    e.target.style.transform = "scale(1,1)";
});



document.getElementById("mas").addEventListener("mousedown", function(e) {
    e.target.style.transform = "scale(.9,.9)";
});

document.getElementById("mas").addEventListener("mouseup", function(e) {
    e.target.style.transform = "scale(1,1)";
});



document.getElementById("menos").addEventListener("mousedown", function(e) {
    e.target.style.transform = "scale(.9,.9)";
});

document.getElementById("menos").addEventListener("mouseup", function(e) {
    e.target.style.transform = "scale(1,1)";
});


document.getElementById("por").addEventListener("mousedown", function(e) {
    e.target.style.transform = "scale(.9,.9)";
});

document.getElementById("por").addEventListener("mouseup", function(e) {
    e.target.style.transform = "scale(1,1)";
});


document.getElementById("dividido").addEventListener("mousedown", function(e) {
    e.target.style.transform = "scale(.9,.9)";
});

document.getElementById("dividido").addEventListener("mouseup", function(e) {
    e.target.style.transform = "scale(1,1)";
});


document.getElementById("igual").addEventListener("mousedown", function(e) {
    e.target.style.transform = "scale(.9,.9)";
});

document.getElementById("igual").addEventListener("mouseup", function(e) {
    e.target.style.transform = "scale(1,1)";
});



document.getElementById("sign").addEventListener("mousedown", function(e) {
    e.target.style.transform = "scale(.9,.9)";
});

document.getElementById("sign").addEventListener("mouseup", function(e) {
    e.target.style.transform = "scale(1,1)";
});


window.onclick = function(e) {
    var boton = e.target;

    if (boton.id === "0") {
        calculadora.agregarNumero(0);
    } else if (boton.id === "2") {
        calculadora.agregarNumero(2);
    } else if (boton.id === "3") {
        calculadora.agregarNumero(3);
    } else if (boton.id === "4") {
        calculadora.agregarNumero(4);
    } else if (boton.id === "5") {
        calculadora.agregarNumero(5);
    } else if (boton.id === "6") {
        calculadora.agregarNumero(6);
    } else if (boton.id === "7") {
        calculadora.agregarNumero(7);
    } else if (boton.id === "8") {
        calculadora.agregarNumero(8);
    } else if (boton.id === "9") {
        calculadora.agregarNumero(9);
    } else if (boton.id === "punto") {
        calculadora.agregarPunto();
    } else if (boton.id === "on") {
        calculadora.reiniciar();
    } else if (boton.id === "mas") {
        calculadora.sumar();
    } else if (boton.id === "menos") {
        calculadora.restar();
    } else if (boton.id === "por") {
        calculadora.multiplicar();
    } else if (boton.id === "dividido") {
        calculadora.dividir();
    } else if (boton.id === "igual") {
        calculadora.calcular();
    } else if (boton.id === "sign") {
        calculadora.masMenos();
    }
};
