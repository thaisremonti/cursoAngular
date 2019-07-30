import { Component, OnInit } from '@angular/core';
import { CalculadoraService } from '../services';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  private numero1: string;
  private numero2: string;
  private resultado: number;
  private operacao: string;

  //o typescript vai criar um atributo para a classe chamado calculadora service
  //que pode ser usado em qualquer outro metodo usando o operador this
  constructor(private calculadoraService: CalculadoraService) { }

  ngOnInit() {
    this.limpar();
  }

  limpar(): void {
    this.numero1 = '0';
    this.numero2 = null;
    this.resultado = null;
    this.operacao = null;
  }

  adicionaNumero(numero: string): void {
    if(this.operacao === null){
      this.numero1 = this.concatenaNumero(this.numero1, numero)
    }else{
      this.numero2 = this.concatenaNumero(this.numero2, numero)
    }
  }

  concatenaNumero(numAtual: string, numConcat: string): string{
    if(numAtual === '0' || numAtual === null){
      numAtual = ';'
    }

    if(numConcat === '.' && numAtual === ''){
      return '0.'
    }

    if(numConcat === '.' && numAtual.indexOf('.') > -1){
      numAtual;
    }

    return numAtual + numConcat;
  }

  definirOperacao(operacao: string): void {
    if(this.operacao === null) {
      this.operacao = operacao;
      return;
    }

    if(this.numero2 != null){
      this.resultado = this.calculadoraService.calcular(
        parseFloat(this.numero1),
        parseFloat(this.numero2),
        this.operacao);
      this.operacao = operacao;
      this.numero1 = this.resultado.toString();
      this.numero2 = null;
      this.resultado = null;
    }
  }

  calcular(): void {
    if(this.numero2 === null) {
      return;
    }

    this.resultado = this.calculadoraService.calcular(
      parseFloat(this.numero1),
      parseFloat(this.numero2),
      this.operacao);
  }

  get display(): string {
    if(this.resultado !== null) {
      return this.resultado.toString();
    }

    if(this.numero2 !== null) {
      return this.numero2;
    }

    return this.numero1;
  }
}
