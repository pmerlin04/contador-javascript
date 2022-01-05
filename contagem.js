var numero = document.getElementById('txtnumero')

function calcular(){
    var n1 = Number(numero.value)
    var resp = document.getElementById('res')
    for(var cont = 0;cont<=n1;cont++){
        resp.innerText+=cont + '\n'
    }
}