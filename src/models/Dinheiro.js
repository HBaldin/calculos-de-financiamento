class Dinheiro {
    constructor(valor) {
        this._valor = (valor * 100);
    }

    get value() {
        return Number((this._valor / 100).toFixed(2));
    }

    set value(valor) {
        this._valor = (valor * 100);
    }
}