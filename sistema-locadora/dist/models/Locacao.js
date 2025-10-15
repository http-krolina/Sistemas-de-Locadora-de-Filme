"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Locacao = void 0;
class Locacao {
    constructor(data) {
        this.data = data || new Date();
        this.valorTotalAPagar = 0;
        this.listaFilmes = [];
    }
    // Getters
    getData() {
        return this.data;
    }
    getValorTotalAPagar() {
        return this.valorTotalAPagar;
    }
    getListaFilmes() {
        return this.listaFilmes;
    }
    // Setters
    setData(data) {
        this.data = data;
    }
    // Métodos específicos
    addFilme(filme) {
        if (this.listaFilmes.length < 10) {
            this.listaFilmes.push(filme);
            this.valorTotalAPagar += filme.getValorLocacao();
        }
        else {
            console.log("Limite de filmes por locação atingido (máximo 10)");
        }
    }
    getNomesFilmes() {
        return this.listaFilmes.map((filme) => filme.getTitulo()).join(", ");
    }
}
exports.Locacao = Locacao;
