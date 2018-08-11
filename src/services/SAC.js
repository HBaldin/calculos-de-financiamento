class SAC {
	static calcular(valor, taxaMensal, meses) {
		//Array de parcelas
		let parcelas = new ListaParcelas();

		//Saldo devedor
		let saldoDevedor = new Dinheiro(valor);

		//Taxa mensal
		taxaMensal = taxaMensal / 100;

		//Mês
		let mes = 1;

		//Amortizacao
		let amortizacao = new Dinheiro(saldoDevedor.value / meses);

		while (saldoDevedor.value > 0) {
			//Saldo inicial
			let saldoInicial = new Dinheiro(saldoDevedor.value);

			//Juros
			let juros = new Dinheiro(saldoInicial.value * taxaMensal);

			//Saldo atualizado
			let saldoAtualizado = new Dinheiro(saldoInicial.value + juros.value);

			//Prestação
			let prestacao = new Dinheiro(juros.value + amortizacao.value);

			//Saldo devedor
			saldoDevedor = new Dinheiro(saldoAtualizado.value - prestacao.value);

			if (saldoDevedor.value <= 0.05)
				saldoDevedor.value = 0;

			//Nova parcela
			let parcela = new Parcela(
				mes,
				prestacao.value,
				juros.value,
				amortizacao.value,
				saldoDevedor.value
			);
			parcelas.adicionar(parcela);
			mes++;
		}

		return parcelas;
	}
}