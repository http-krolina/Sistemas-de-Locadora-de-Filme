"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cliente = void 0;
class Cliente {
    constructor(nome, cpf, endereco, telefone) {
        this.nome = nome || "";
        this.cpf = cpf || "";
        this.endereco = endereco || "";
        this.telefone = telefone || "";
    }
    // Getters
    getNome() {
        return this.nome;
    }
    getCpf() {
        return this.cpf;
    }
    getEndereco() {
        return this.endereco;
    }
    getTelefone() {
        return this.telefone;
    }
    // Setters
    setNome(nome) {
        this.nome = nome;
    }
    setCpf(cpf) {
        this.cpf = cpf;
    }
    setEndereco(endereco) {
        this.endereco = endereco;
    }
    setTelefone(telefone) {
        this.telefone = telefone;
    }
}
exports.Cliente = Cliente;
