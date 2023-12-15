import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent implements OnInit {
  ngOnInit(): void {

  }
  pensamento: Pensamento = {
    id: 1,
    conteudo: 'Testando conhecimento',
    autoria: 'Lennon',
    modelo: ''
  }

  criarPensamento(): void {
    alert("Funcionei");
  }

  cancelar() {
  }
}
