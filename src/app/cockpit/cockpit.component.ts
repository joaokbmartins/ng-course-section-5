import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

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
 
  // private newServerName:string = null;
  // private newServerContent: string = null;
  
  @ViewChild('serverContentInput')
  private serverContentInput: ElementRef = null;

  constructor() { }

  ngOnInit(): void { }  
  
  onAddServer(serverName:HTMLInputElement) { 
    this.serverCreated.emit({
      name: serverName.value ? serverName.value : 'BBBBB' ,
      // content: this.newServerContent ? this.newServerContent : 'AAAAA'
      content: this.serverContentInput.nativeElement.value ?
        this.serverContentInput.nativeElement.value : 'AAAAA'
    });
  }

  onAddBlueprint(serverName:HTMLInputElement) {
    this.blueprintCreated.emit({
      name: serverName.value ? serverName.value : 'BBBBB' ,
      // content: this.newServerContent ? this.newServerContent : 'AAAAA'
      content: this.serverContentInput.nativeElement.value ?
        this.serverContentInput.nativeElement.value : 'AAAAA'
    });
  }

  // public getNewServerNmae(): string {
  //   return this.newServerName;
  // }

  // public setNewServerNmae(newServerName: string): void {
  //   this.newServerName = newServerName;
  // }

  // public getNewServerContent(): string {
  //   return this.newServerContent;
  // }

  // public setNewServerContent(newServerContent: string): void {
  //   this.newServerContent = newServerContent;
  // }
  
}
