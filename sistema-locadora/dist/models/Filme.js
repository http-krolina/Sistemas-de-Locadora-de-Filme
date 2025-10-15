"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Filme = void 0;
class Filme {
    constructor(titulo, ano, genero, valorLocacao) {
        this.titulo = titulo || "";
        this.ano = ano || 0;
        this.genero = genero || "";
        this.valorLocacao = valorLocacao || 0;
    }
    // Getters
    getTitulo() {
        return this.titulo;
    }
    getAno() {
        return this.ano;
    }
    getGenero() {
        return this.genero;
    }
    getValorLocacao() {
        return this.valorLocacao;
    }
    // Setters
    setTitulo(titulo) {
        this.titulo = titulo;
    }
    setAno(ano) {
        this.ano = ano;
    }
    setGenero(genero) {
        this.genero = genero;
    }
    setValorLocacao(valorLocacao) {
        this.valorLocacao = valorLocacao;
    }
}
exports.Filme = Filme;
