function inserir(num)
{
    var numero = document.getElementById('visor').innerHTML
    document.getElementById('visor').innerHTML = numero + num
}

function limpar()
{
    document.getElementById('visor').innerHTML = ''
}

function calcular()
{
    var resultado = document.getElementById('visor').innerHTML
    if(resultado){
        document.getElementById('visor').innerHTML = eval(resultado)
    }
    else{
        
    }
}