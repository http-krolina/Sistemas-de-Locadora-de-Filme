export class Cliente {
  private nome: string;
  private cpf: string;
  private endereco: string;
  private telefone: string;

  constructor();
  constructor(nome: string, cpf: string, endereco: string, telefone: string);
  constructor(
    nome?: string,
    cpf?: string,
    endereco?: string,
    telefone?: string
  ) {
    this.nome = nome || "";
    this.cpf = cpf || "";
    this.endereco = endereco || "";
    this.telefone = telefone || "";
  }

  // Getters
  public getNome(): string {
    return this.nome;
  }

  public getCpf(): string {
    return this.cpf;
  }

  public getEndereco(): string {
    return this.endereco;
  }

  public getTelefone(): string {
    return this.telefone;
  }

  // Setters
  public setNome(nome: string): void {
    this.nome = nome;
  }

  public setCpf(cpf: string): void {
    this.cpf = cpf;
  }

  public setEndereco(endereco: string): void {
    this.endereco = endereco;
  }

  public setTelefone(telefone: string): void {
    this.telefone = telefone;
  }
}
