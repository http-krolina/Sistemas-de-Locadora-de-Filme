import { Filme } from "./Filme";

export class Locacao {
  private data: Date;
  private valorTotalAPagar: number;
  private listaFilmes: Filme[];

  constructor();
  constructor(data: Date);
  constructor(data?: Date) {
    this.data = data || new Date();
    this.valorTotalAPagar = 0;
    this.listaFilmes = [];
  }

  // Getters
  public getData(): Date {
    return this.data;
  }

  public getValorTotalAPagar(): number {
    return this.valorTotalAPagar;
  }

  public getListaFilmes(): Filme[] {
    return this.listaFilmes;
  }

  // Setters
  public setData(data: Date): void {
    this.data = data;
  }

  // Métodos específicos
  public addFilme(filme: Filme): void {
    if (this.listaFilmes.length < 10) {
      this.listaFilmes.push(filme);
      this.valorTotalAPagar += filme.getValorLocacao();
    } else {
      console.log("Limite de filmes por locação atingido (máximo 10)");
    }
  }

  public getNomesFilmes(): string {
    return this.listaFilmes.map((filme) => filme.getTitulo()).join(", ");
  }
}
