import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrl: './cockpit.component.css'
})
export class CockpitComponent {
  @Output('srvCreated') serverCreated = new EventEmitter<{serverName: string, serverContent: string}>;
  @Output('bpCreated') blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>;

  //newServerName = '';
  newServerContent = '';

  onAddServer(nameInput : HTMLInputElement) {
    this.serverCreated.emit({
      serverName: nameInput.value, 
      serverContent: this.newServerContent});
  }

  onAddBlueprint(nameInput) {
    this.blueprintCreated.emit({
      serverName: nameInput.value, 
      serverContent: this.newServerContent});
  }
}
