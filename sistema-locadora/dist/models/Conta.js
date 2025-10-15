"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Conta = void 0;
const Cliente_1 = require("./Cliente");
const Locacao_1 = require("./Locacao");
class Conta {
    constructor(cliente, numero) {
        this.cliente = cliente || new Cliente_1.Cliente();
        this.numero = numero || 0;
        this.saldoDevedor = 0;
        this.historicoLocacao = [];
    }
    // Getters
    getCliente() {
        return this.cliente;
    }
    getNumero() {
        return this.numero;
    }
    getSaldoDevedor() {
        return this.saldoDevedor;
    }
    getHistoricoLocacao() {
        return this.historicoLocacao;
    }
    // Setters
    setCliente(cliente) {
        this.cliente = cliente;
    }
    setNumero(numero) {
        this.numero = numero;
    }
    // Métodos específicos
    locarFilmes(filmes) {
        if (filmes.length > 10) {
            console.log("Limite de filmes por locação é 10");
            return;
        }
        const locacao = new Locacao_1.Locacao(new Date());
        filmes.forEach((filme) => {
            locacao.addFilme(filme);
        });
        this.historicoLocacao.push(locacao);
        this.saldoDevedor += locacao.getValorTotalAPagar();
    }
    extratoHistorico() {
        let extrato = `:: Histórico de Locações de ${this.cliente.getNome()} ::\n`;
        extrato += "Data da locação\t\tLista de filmes\t\tValor da locação\n";
        this.historicoLocacao.forEach((locacao) => {
            const dataFormatada = locacao.getData().toLocaleString("pt-BR");
            const filmes = locacao.getNomesFilmes();
            const valor = locacao.getValorTotalAPagar().toFixed(2);
            extrato += `${dataFormatada}\t${filmes}\tR$ ${valor}\n`;
        });
        return extrato;
    }
    pagarDebito(valor) {
        if (valor <= 0) {
            console.log("Valor deve ser positivo");
            return;
        }
        if (valor > this.saldoDevedor) {
            console.log(`Valor pago (R$ ${valor}) excede o débito (R$ ${this.saldoDevedor})`);
            this.saldoDevedor = 0;
        }
        else {
            this.saldoDevedor -= valor;
        }
        console.log(`Débito atual: R$ ${this.saldoDevedor.toFixed(2)}`);
    }
}
exports.Conta = Conta;
