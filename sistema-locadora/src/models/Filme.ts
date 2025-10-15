export class Filme {
  private titulo: string;
  private ano: number;
  private genero: string;
  private valorLocacao: number;

  constructor();
  constructor(
    titulo: string,
    ano: number,
    genero: string,
    valorLocacao: number
  );
  constructor(
    titulo?: string,
    ano?: number,
    genero?: string,
    valorLocacao?: number
  ) {
    this.titulo = titulo || "";
    this.ano = ano || 0;
    this.genero = genero || "";
    this.valorLocacao = valorLocacao || 0;
  }

  // Getters
  public getTitulo(): string {
    return this.titulo;
  }

  public getAno(): number {
    return this.ano;
  }

  public getGenero(): string {
    return this.genero;
  }

  public getValorLocacao(): number {
    return this.valorLocacao;
  }

  // Setters
  public setTitulo(titulo: string): void {
    this.titulo = titulo;
  }

  public setAno(ano: number): void {
    this.ano = ano;
  }

  public setGenero(genero: string): void {
    this.genero = genero;
  }

  public setValorLocacao(valorLocacao: number): void {
    this.valorLocacao = valorLocacao;
  }
}
