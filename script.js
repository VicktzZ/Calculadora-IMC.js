const calcular = document.querySelector("#calcular")

calcular.addEventListener("click", () => {
    const nome = document.querySelector("#nome").value
    const altura = document.querySelector("#altura").value 
    const peso = document.querySelector("#peso").value
    const resultado = document.querySelector("#resultado")
    const valorIMC = (peso / (altura * altura)).toFixed(2)
    let classificacao

    if (valorIMC < 17) {
        classificacao = "MUITO abaixo do peso"
    } else {
        if (valorIMC < 18.5) {
                classificacao = "Abaixo do peso"
            } else {
                if (valorIMC < 25) {
                    classificacao = "Normal"
            } else {
                if (valorIMC < 30) {
                        classificacao = "Sobrepeso"
                    } else {
                    if (valorIMC < 35) {
                        classificacao = "Obeso(a)"
                    } else {
                        if (valorIMC < 40) {
                            classificacao = "Peso Mórbido"
                        } else {
                            classificacao = "Obesidade Crônica"
                        }
                    }
                }
            }
        }
    }

    resultado.textContent = `${nome} seu IMC é ${valorIMC} e sua classificação de peso é ${classificacao}.`
    
    if (nome === '' || altura === '' || peso === '' ) {
        alert("Preencha todos os campos abaixo!")
        resultado.textContent = ''
    }
    
})



