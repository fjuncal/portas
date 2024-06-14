import { PortaModel } from "../model/portaModel";

export function criarPortas(qtd: number, selecionada: number): PortaModel[] {
  return Array.from({ length: qtd }, (_, i) => {
    const numero = i + 1;
    const temPresente = numero === selecionada;
    return new PortaModel(numero, temPresente);
  });
}
