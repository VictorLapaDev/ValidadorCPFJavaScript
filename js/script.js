let cpfBef = document.getElementById("cpf");

function testarCPF(){

    if(cpfBef.value === ""){
        alert("Digite um CPF para a validação!!!")
    } 
    else{           //testara os cpfs
        
        let cpf = cpfBef.value.replaceAll(/[^0-9\s]/g, '');  //retira os caracteres indesejados

        if(cpf.length != 11 || cpf == 11111111111 || cpf == 22222222222 || cpf == 33333333333 || cpf == 44444444444 || cpf == 55555555555 || cpf == 666666666 || cpf == 77777777777 || cpf == 88888888888 || cpf == 99999999999 ){   //se não tiver 11 caracteres ja define como inválido ou se for apenas números iguais

            document.getElementById("resultado").innerHTML =`<span id="invalido">CPF Inválido!!!</span>`;

        } else {
            //armazena os números do cpf em uma array para facilitar a validação
            numsCPF = []; //criando uma array para armazenar cada indice do cpf
            for(let i = 0; i < cpf.length; i++){
                numsCPF[i] = cpf.charAt(i);
            }

            //calcula o primeiro digito
            let dig1 = 0;           //inicia ele
            let regressao = 10;     //número necessario para validar 
            for(let i = 0; i < 9; i++){         //loop para fazer a conta
                dig1 += numsCPF[i] * regressao;
                regressao--;
            }
            dig1 = (dig1 * 10) % 11;        //final da conta
            if(dig1 >= 10){
                dig1 = 0;
            }


            //valida, caso o digito seja diferente, ele da invalido, se não continua a validação
            if(dig1 != numsCPF[9]){

                document.getElementById("resultado").innerHTML = `<span id="invalido">CPF Inválido!!!</span>`;

            } else{
                
                //calcula o segundo digito
                let dig2 = 0;
                regressao = 11;
                for(let i = 0; i < 10; i++){         //loop para fazer a conta
                    dig2 += numsCPF[i] * regressao;
                    regressao--;
                }
                dig2 = (dig2 * 10) % 11;        //final da conta
                if(dig2 >= 10){
                    dig2 = 0;
                }

                if(dig2 != numsCPF[10]){
                    document.getElementById("resultado").innerHTML = `<span id="invalido">CPF Inválido!!!</span>`;
                } else{
                    document.getElementById("resultado").innerHTML = `<span id="valido">CPF Válido!!!</span>`;
                }
            }
        }

        document.getElementById("resultado").style.border = "1px solid black";
        document.getElementById("resultado").style.padding = "5px 10px";

    }
}   