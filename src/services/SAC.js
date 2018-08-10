class SAC {
	static calcular(valor, taxa, meses) {
		//Array de parcelas
		let parcelas = [
			new Parcela(0, 0, 0, 0, valor)
		];

		//Calcula o valor da amortização
		let amortizacao = new Dinheiro(valor / meses);

		//Saldo devedor
		let saldoDevedor = new Dinheiro(valor);

		//Converte a taxa
		taxa = (taxa / 100);

		//Mês inicial
		let mes = 1;

		//Enquanto o valor não for 0
		while (saldoDevedor.value > 0) {
			//Cálcula o juros 
			let juros = new Dinheiro(saldoDevedor.value * taxa);

			//Valor da prestação
			let prestacao = new Dinheiro(amortizacao.value + juros.value);

			//Saldo devedor
			saldoDevedor.value -= amortizacao.value;

			//Cria e insere a parcela na lista
			let parcela = new Parcela(mes,
				prestacao.value,
				juros.value,
				amortizacao.value,
				saldoDevedor.value
			);

			parcelas.push(parcela);
			mes++;
		}

		//Return
		return parcelas;
	}
}