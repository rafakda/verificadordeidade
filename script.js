function verificar(){//ABRIR UMA FUNÇÃO DE VERIFICAR
    var data = new Date()//CRIAR UMA VARIÁVEL COM O VALOR DA DATA ATUAL
    var ano = data.getFullYear()//CRIAR UMA VARIÁVEL COM O VALOR DO ANO ATUAL
    var fano = document.getElementById("txtano")//PUXAR COM UMA VARIÁVEL O VALOR DO IMPUT DO ANO DE NASCIMENO DO USUÁRIO
    var res = document.getElementById("res")// PUXAR O VALOR DA RESPOSTA DE TODA EQUAÇÃO 

    var img = document.createElement("img")//CRIAR UM ELEMENTO DO DOCUMENTO ATRAVÉS DO JS
    img.setAttribute(`id`, `foto`)//CRIAR UM ID PARA ESSE ELEMENTO ATRAVÉS DO JS 

    if(fano.value.length == 0  || fano.value > ano){//SE O ANO SELECIONADO FOR MENOR QUE 0 OU MAIOR QUE O ANO ATUAL, ENT RECEBERÁ UM ALERTA ESPECIFICAMDO O ERRO COMETIDO
            alert(" [ERRO] verificar os dados e tente novamente")
    }

                                                        //PRIMEIRA FASE CONCLUIDA

        var masc = document.getElementById("masc")//PUXAR O VALOR DO RADIO MASCULINO
        var fem = document.getElementById("fem")//PUXAR O VALOR DO FEMININO
        var idade = ano - Number(fano.value)//CRIAR UMA VARIAVEL IDADE PARA: ANO ATUAL- ANO DE NASCIMENTO DO USUÁRIO
        var genero = ""// ABRIR UMA VARIÁVEL PARA GENERO E DEIXAR VAZIA

                                                      //SEGUNDA FASE CONCLUIDA
                                                      //BLOCO MASCULIN0

        if(masc.checked){
        genero = "masculino"

        if(idade >=0 && idade <= 10){
            //criança  
            img.src="homem.criança.jpg"
                
        }else if( idade < 21){// TESTES LOGICOS ELSE IF DE ACORDO COM A IDADE A UNICA MUDANÇA SERÃO AS IMAGENS
            //jovem
            img.src="homem.jovem.jpg"
            
        }else if(idade >= 21 &&  idade < 50){
            //adulto
            img.src="homem.adulto.jpg"

        }else{
            //idoso
            img.src="homem.adulto.jpg"

        }

                                                        //BLOCO FEMININO
    }else if(fem.checked){
         genero = "feminino"

         if(idade >=0 && idade <= 10){
            //criança
            img.src="mulher.criança.jpg"

        }else if( idade < 21){// TESTES LOGICOS ELSE IF DE ACORDO COM A IDADE A UNICA MUDANÇA SERÃO AS IMAGENS
            //jovem
            img.src="mulher.jovem.jpg"

        }else if(idade >= 21 &&  idade < 50){
            //adulto
            img.src="mulher.adulto.jpg"


        }else{
            //idoso
            img.src="idoso.mulher.jpg"
        }
    }
    //NO FINAL DO BLOCO 2 IREEMOS COLOCAR OS RESULADOS DE ACORDO COM OS TESTES LOGICOS: UM PARA TEXTO E OUTRO PARA IMAGEM 
    res.innerHTML=` detectamos o sexo ${genero} com ${idade} anos`
   res.appendChild(img)//PARA A IMAGEM APARECER A BAIXO DOS VALORES
   
}