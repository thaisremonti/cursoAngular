import { Component, OnInit } from '@angular/core';
import { CalculadoraService } from '../services';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {
  //o typescript vai criar um atributo para a classe chamado calculadora service
  //que pode ser usado em qualquer outro metodo usando o operador this
  constructor(private calculadoraService: CalculadoraService) { }

  ngOnInit() {
  }

}
