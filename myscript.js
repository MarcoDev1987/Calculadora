function loaded(){
            
    let e = document.getElementById("Value")            // A variável e recebe o Elemento da Div que está o sinal de Igual no HTML
    e.addEventListener("click", calculate)              // Assim, com o valor da Div com sinal de "=" podemos realizar o evento click
    
    let input1 = document.getElementById("Space1")     //Com este Evento é possível apertar o enter e execultar a função calculate, tanto no campo 1 quanto no campo 2
    input1.addEventListener("keyup", PressEnter)

    let input2 = document.getElementById("Space2")
    input2.addEventListener("keyup", PressEnter)
}
function PressEnter(){
    if(event.keyCode === 13){
        calculate()
    }
}

function calculate(){

    let r = document.getElementById("Answ")
    let A = document.getElementById("Space1")
    let B = document.getElementById("Space2")
    let s = document.getElementById("Operation")

    if(s.value == "+"){
    var C = parseFloat(A.value.replace(',','.')) + parseFloat(B.value.replace(',','.'))
    }
    else if(s.value == "-"){
        var C = parseFloat(A.value.replace(',','.')) - parseFloat(B.value.replace(',','.'))
    }
    else if(s.value == "x"){
        var C = parseFloat(A.value.replace(',','.')) * parseFloat(B.value.replace(',','.'))
    }
    else if(s.value == "/"){
        var C = parseFloat(A.value.replace(',','.')) / parseFloat(B.value.replace(',','.'))
    }
    else{
        return 0
    }
    console.log(C)

    if (isNaN(C) ){                                     //Utilizando a função isNaN podemos conferir se há campos que não é preenchidos por números
        r.style.display = "none"
        
    }
    else{
    r.innerText = C.toFixed( 2 ).replace('.',',')      //Após a conferência de que realmente é um número o resultado de C vem com decimais e é trocado o ponto pela vírgula
    r.style.display = "inline-block" 
    }
}