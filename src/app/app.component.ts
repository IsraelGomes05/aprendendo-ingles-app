import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public jogoEmAndamento = true;
  public encerramento: string;

  public encerrarJogo(tipo: string): void {
    this.jogoEmAndamento = false;
    this.encerramento = tipo;
  }

  public reiniciar(): void {
    this.jogoEmAndamento  = true;
    this.encerramento = undefined;
  }
}
