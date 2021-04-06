var listaProdutos = [];
var produto = '';

            do {
                produto = prompt('Informe um produto:');

		//se não for igual a vázio retorna o que tá entre o if
        if(produto != "")
		{
			//se for diferente de vázio a variável valido é true.
            var valido = true;
					//Corre o array 
                    for(var i = 0; i < listaProdutos.length; i++)
					{
						//continua o laço até que valido fique falso, que será quando 
                        //valido e listaProdutos[i] não forem iguais a produtos
                        //valido recebe valido e lista produtos[i] e valido e lista produtos[i]
                        // é diferente de produto 
                   		valido = valido && listaProdutos[i] != produto;
                    }
            if(valido)
			{
                listaProdutos.push(produto);
            }
			else
			{
                alert("Produto repetido");
            }
        }

		else
		{
            alert("produto nao pode ser vazio");
        }
            } while (confirm('Deseja inserir mais um produto?'));
			alert(listaProdutos);