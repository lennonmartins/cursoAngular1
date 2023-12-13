import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent implements OnInit {
  ngOnInit(): void {

  }
  properties = {
    id: '1',
    conteudo: 'Testando conhecimento',
    autoria: 'Lennon',
    modelo: ''
  }

  criarPensamento(): void {
    alert("Funcionei");
  }

  cancelar() {
    alert("Funcionei também!");
  }
}
