import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  @Output()
  private serverCreated: EventEmitter<{ name: string, content: string; }> =
    new EventEmitter<{ name: string, content: string }>();
  
  @Output('bpCreated')
  private blueprintCreated: EventEmitter<{ name: string, content: string; }> =
    new EventEmitter<{ name: string, content: string }>();
 
  private newServerName:string = null;
  private newServerContent:string = null;

  constructor() { }

  ngOnInit(): void {
  }  
  
  onAddServer() {
    this.serverCreated.emit({
      name: this.newServerName ? this.newServerName : 'BBBBB' ,
      content: this.newServerContent ? this.newServerContent : 'AAAAA'
    });
  }

  onAddBlueprint() {
    this.blueprintCreated.emit({
      name: this.newServerName ? this.newServerName : 'BBBBB' ,
      content: this.newServerContent ? this.newServerContent : 'AAAAA'
    });
  }

  public getNewServerNmae(): string {
    return this.newServerName;
  }

  public setNewServerNmae(newServerName: string): void {
    this.newServerName = newServerName;
  }

  public getNewServerContent(): string {
    return this.newServerContent;
  }

  public setNewServerContent(newServerContent: string): void {
    this.newServerContent = newServerContent;
  }
  
}
