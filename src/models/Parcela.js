class Parcela {
	constructor(mes, prestacao, juros, amortizacao, saldoDevedor) {
		this._mes = mes;
		this._prestacao = prestacao;
		this._juros = juros;
		this._amortizacao = amortizacao;
		this._saldoDevedor = saldoDevedor;
		Object.freeze(this);
	}

	get mes() {
		return this._mes;
	}

	get prestacao() {
		return this._prestacao;
	}

	get juros() {
		return this._juros;
	}

	get amortizacao() {
		return this._amortizacao;
	}

	get saldoDevedor() {
		return this._saldoDevedor;
	}

	toJSON() {
		return {
			mes: this.mes,
			prestacao: this.prestacao,
			juros: this.juros,
			amortizacao: this.amortizacao,
			saldoDevedor: this.saldoDevedor
		};
	}
}