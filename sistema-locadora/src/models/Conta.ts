import { Cliente } from "./Cliente";
import { Filme } from "./Filme";
import { Locacao } from "./Locacao";

export class Conta {
  private cliente: Cliente;
  private numero: number;
  private saldoDevedor: number;
  private historicoLocacao: Locacao[];

  constructor();
  constructor(cliente: Cliente, numero: number);
  constructor(cliente?: Cliente, numero?: number) {
    this.cliente = cliente || new Cliente();
    this.numero = numero || 0;
    this.saldoDevedor = 0;
    this.historicoLocacao = [];
  }

  // Getters
  public getCliente(): Cliente {
    return this.cliente;
  }

  public getNumero(): number {
    return this.numero;
  }

  public getSaldoDevedor(): number {
    return this.saldoDevedor;
  }

  public getHistoricoLocacao(): Locacao[] {
    return this.historicoLocacao;
  }

  // Setters
  public setCliente(cliente: Cliente): void {
    this.cliente = cliente;
  }

  public setNumero(numero: number): void {
    this.numero = numero;
  }

  // Métodos específicos
  public locarFilmes(filmes: Filme[]): void {
    if (filmes.length > 10) {
      console.log("Limite de filmes por locação é 10");
      return;
    }

    const locacao = new Locacao(new Date());

    filmes.forEach((filme) => {
      locacao.addFilme(filme);
    });

    this.historicoLocacao.push(locacao);
    this.saldoDevedor += locacao.getValorTotalAPagar();
  }

  public extratoHistorico(): string {
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

  public pagarDebito(valor: number): void {
    if (valor <= 0) {
      console.log("Valor deve ser positivo");
      return;
    }

    if (valor > this.saldoDevedor) {
      console.log(
        `Valor pago (R$ ${valor}) excede o débito (R$ ${this.saldoDevedor})`
      );
      this.saldoDevedor = 0;
    } else {
      this.saldoDevedor -= valor;
    }

    console.log(`Débito atual: R$ ${this.saldoDevedor.toFixed(2)}`);
  }
}
