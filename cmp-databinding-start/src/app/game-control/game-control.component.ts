import { Component, OnInit, EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrl: './game-control.component.css'
})
export class GameControlComponent {
  interval;
  lastNumber = 0;
  @Output() intervalFired = new EventEmitter<number>();

  onStartGame(){
      this.interval = setInterval(()=>{
        this.intervalFired.emit(this.lastNumber+1);
        this.lastNumber++;
      }, 1000);
  }

  onPauseGame(){
    clearInterval(this.interval);
  }
}
