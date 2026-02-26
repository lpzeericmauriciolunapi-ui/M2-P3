import { CommonModule } from '@angular/common';
import { Component, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-avatar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './avatar.html',
  styleUrl: './avatar.scss',
})
export class Avatar {
  colorFondo: WritableSignal<string> = signal<string>('#5428ff');
  tamano: WritableSignal<number> = signal<number>(100);
  tieneLentes: WritableSignal<boolean> = signal<boolean>(false);
  tipoExpresion: WritableSignal<number> = signal<number>(1);

  cambiarTamano(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.tamano.set(parseInt(input.value));
  }

  cambiarColor(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.colorFondo.set(input.value);
  }

  toggleLentes(): void {
    this.tieneLentes.update(flag => !flag);
  }

  setExpresion(tipo: number): void {
    this.tipoExpresion.set(tipo);
  }
  
}
