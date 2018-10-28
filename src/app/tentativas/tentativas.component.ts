import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Coracao} from '../shared/coracao.model';

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})
export class TentativasComponent implements OnInit, OnChanges {

  @Input() public tentativas: number;

  public coracoes: Coracao[] = [
    new Coracao(true),
    new Coracao(true),
    new Coracao(true)
  ];

  constructor() {
  }

  ngOnInit() {
  }

  ngOnChanges(): void {
    if (this.tentativas !== this.coracoes.length) {
      const indece = this.coracoes.length - this.tentativas;
      this.coracoes[ indece - 1].cheio = false;
    }
  }
}
