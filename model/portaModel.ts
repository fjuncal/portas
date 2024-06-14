export class PortaModel {
  numero: number;
  temPresente: boolean;
  selecionada: boolean;
  aberta: boolean;

  constructor(
    numero,
    temPresente = false,
    selecionada = false,
    aberta = false
  ) {
    this.numero = numero;
    this.temPresente = temPresente;
    this.selecionada = selecionada;
    this.aberta = aberta;
  }

  getNumero() {
    return this.numero;
  }

  getTemPresente() {
    return this.temPresente;
  }

  getSelecionada() {
    return this.selecionada;
  }

  getAberta() {
    return this.aberta;
  }

  desselecionar() {
    const selecionada = false;
    return new PortaModel(
      this.numero,
      this.temPresente,
      selecionada,
      this.aberta
    );
  }

  alternarSelecao() {
    const selecionada = !this.selecionada;
    return new PortaModel(
      this.numero,
      this.temPresente,
      selecionada,
      this.aberta
    );
  }

  abrir() {
    const aberta = true;
    return new PortaModel(
      this.numero,
      this.temPresente,
      this.selecionada,
      aberta
    );
  }
}
