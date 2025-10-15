"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Cliente_1 = require("./models/Cliente");
const Conta_1 = require("./models/Conta");
const Filme_1 = require("./models/Filme");
class Principal {
    static main() {
        // Criando filmes
        const filmes = [
            new Filme_1.Filme("O Poderoso Chefão", 1972, "Drama", 5.0),
            new Filme_1.Filme("Matrix", 1999, "Ficção Científica", 4.5),
            new Filme_1.Filme("Interestelar", 2014, "Ficção Científica", 6.0),
            new Filme_1.Filme("Cidade de Deus", 2002, "Drama", 4.0),
            new Filme_1.Filme("O Senhor dos Anéis: A Sociedade do Anel", 2001, "Fantasia", 5.5),
            new Filme_1.Filme("Pulp Fiction", 1994, "Crime", 4.5),
            new Filme_1.Filme("Van helsing: O caçador de monstros", 2004, "Terror", 7.5),
            new Filme_1.Filme("Clube da Luta", 1999, "Drama", 4.0),
            new Filme_1.Filme("Forrest Gump", 1994, "Drama", 4.5),
            new Filme_1.Filme("Nosferatu", 1922, "Terror", 6.5),
        ];
        // Criando clientes
        const cliente1 = new Cliente_1.Cliente("Marina Sena", "111.222.333-44", "Rua Pereira, 123", "(11) 9999-1111");
        const cliente2 = new Cliente_1.Cliente("Kali Uchis", "222.333.444-55", "Rua Brasilandia, 456", "(11) 9999-2222");
        const cliente3 = new Cliente_1.Cliente("Marisa Monte", "333.444.555-66", "Rua Costa silva, 789", "(11) 9999-3333");
        const cliente4 = new Cliente_1.Cliente("Ariana Grande", "444.555.666-77", "Rua Dantes, 101", "(11) 9999-4444");
        const cliente5 = new Cliente_1.Cliente("Abel Silva", "555.666.777-88", "Rua Emanoel carlos, 202", "(11) 9999-5555");
        // Criando contas
        const conta1 = new Conta_1.Conta(cliente1, 1);
        const conta2 = new Conta_1.Conta(cliente2, 2);
        const conta3 = new Conta_1.Conta(cliente3, 3);
        const conta4 = new Conta_1.Conta(cliente4, 4);
        const conta5 = new Conta_1.Conta(cliente5, 5);
        const contas = [conta1, conta2, conta3, conta4, conta5];
        // Simulando locações para cada cliente
        conta1.locarFilmes([filmes[0], filmes[1]]);
        conta1.locarFilmes([filmes[2]]);
        conta1.locarFilmes([filmes[3], filmes[4], filmes[5]]);
        conta1.locarFilmes([filmes[6]]);
        conta2.locarFilmes([filmes[1], filmes[2], filmes[3]]);
        conta2.locarFilmes([filmes[4]]);
        conta2.locarFilmes([filmes[5], filmes[6]]);
        conta2.locarFilmes([filmes[7]]);
        conta2.locarFilmes([filmes[8], filmes[9]]);
        conta3.locarFilmes([filmes[0]]);
        conta3.locarFilmes([filmes[2], filmes[3]]);
        conta3.locarFilmes([filmes[4], filmes[5], filmes[6]]);
        conta3.locarFilmes([filmes[7], filmes[8]]);
        conta4.locarFilmes([filmes[0]]);
        conta4.locarFilmes([filmes[1]]);
        conta4.locarFilmes([filmes[2]]);
        conta4.locarFilmes([filmes[3]]);
        conta4.locarFilmes([filmes[4]]);
        conta4.locarFilmes([filmes[5], filmes[6], filmes[7]]);
        conta5.locarFilmes([filmes[8], filmes[9]]);
        conta5.locarFilmes([filmes[0], filmes[1], filmes[2]]);
        conta5.locarFilmes([filmes[3]]);
        conta5.locarFilmes([filmes[4], filmes[5]]);
        conta5.locarFilmes([filmes[6], filmes[7], filmes[8], filmes[9]]);
        conta1.pagarDebito(10.0);
        conta2.pagarDebito(15.0);
        console.log("=== SISTEMA DE LOCADORA DE FILMES ===\n");
        contas.forEach((conta) => {
            console.log(conta.extratoHistorico());
            console.log(`Saldo devedor: R$ ${conta.getSaldoDevedor().toFixed(2)}`);
            console.log("=".repeat(80) + "\n");
        });
    }
}
// Executando o sistema
Principal.main();
