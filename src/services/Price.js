class Price {
	static calcular(valor, taxa, meses) {
		//Array de retorno
		let parcelas = [
			new Parcela(0, 0, 0, 0, valor)
		];

		//Saldo devedor
		let saldoDevedor = new Dinheiro(valor);

		//Taxa em %
		taxa = taxa / 100;

		//Cálcula a potencia da taxa ( 1 + taxa ) ^ meses
		let potencia = Math.pow((1 + taxa), meses);

		let numerador = potencia * taxa;
		let denominador = potencia - 1;

		//Calcula o valor das prestações
		let prestacao = new Dinheiro(saldoDevedor.value * (numerador / denominador));

		//Mês incial
		let mes = 1;

		while (saldoDevedor.value > 0) {

			//Cálcula os juros
			let juros = new Dinheiro(saldoDevedor.value * taxa);

			//Cálcula o valor da amortização
			let amortizacao = new Dinheiro(prestacao.value - juros.value);

			//Cálcula o saldo devedor
			saldoDevedor.value -= amortizacao.value;

			//Cria a nova parcela e insere
			let parcela = new Parcela(mes,
				prestacao.value,
				juros.value,
				amortizacao.value,
				saldoDevedor.value
			);

			parcelas.push(parcela);

			//Adiciona um mês
			mes++;
		}

		//Return
		return parcelas;
	}
}