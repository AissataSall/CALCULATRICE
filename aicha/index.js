(function () {
  window.addEventListener("load", init);

    function init() {
        qs('.col2').style.visibility = "hidden";
        id('envoyer').addEventListener('click', resultats);
    }

    function resultats() {
        let a = id('nb1').value;
        let b = id('nb2').value;
        if (b == '' || a == '') {
            qs('span').textContent = 'Veillez renseigner tous les deux champs';
        }
        else {
            if (b == 0) {
                qs('span').textContent = 'Le deuxieme champ ne doit pas contenir un nombre nul';
            } else {
                id('addition').textContent = 'Additon : ' + addition(a, b);
                id('soustraction').textContent = 'Soustraction : ' + soustraction(a, b);
                id('division').textContent = 'Division : ' + division(a, b);
                id('modulo').textContent = 'Modulo : ' + modulo(a, b);
                id('multiplication').textContent = 'Multiplication : ' + multiplication(a, b);
                qs('.col2').style.visibility = "visible";
            }
        }
    }

    function addition(a, b) {
        return eval(a + '+' + b);
    }

    function soustraction(a, b) {
        return eval(a + '-' + b);
    }

    function division(a, b) {
        return Math.trunc(eval(a + '/' + b));
    }

    function modulo(a, b) {
        return eval(a + '%' + b);
    }

    function multiplication(a, b) {
        return eval(a + '*' + b);
    }

    function id(params) {
        return document.getElementById(params);
    }

    function qs(params) {
        return document.querySelector(params);
    }

})();
