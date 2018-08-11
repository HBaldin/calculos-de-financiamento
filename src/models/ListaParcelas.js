class ListaParcelas {
    constructor() {
        //Lista interna de Parcelas
        this._parcelas = [];
    }

    get parcelas() {
        return [].concat(this._parcelas);
    }

    adicionar(parcela) {
        this._parcelas.push(parcela);
    }

    maior() {
        return this._parcelas.reduce((maiorParcela, parcelaAtual) => {
            //Verifica qual é maior
            if (maiorParcela.prestacao < parcelaAtual.prestacao) {
                maiorParcela = parcelaAtual;
            }
            //Retorna a maior parcela                
            return maiorParcela;
        });
    }

    menor() {
        return this._parcelas.reduce((menorParcela, parcelaAtual) => {
            //Verifica qual é menor
            if (menorParcela.prestacao > parcelaAtual.prestacao) {
                menorParcela = parcelaAtual;
            }

            //Retorna a menor parcela
            return menorParcela;
        });
    }

    rendaMinima() {
        return new Dinheiro(this.maior().prestacao / 0.25).value;
    }
}