class Parcela {
    constructor(mes, prestacao, juros, amortizacao, saldoDevedor) {
    	this._mes = mes;
    	this._prestacao = prestacao;
    	this._juros = juros;
    	this._amortizacao = amortizacao;
    	this._saldoDevedor = saldoDevedor;
    	Object.freeze(this);
    }
}