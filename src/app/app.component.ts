import { Component } from '@angular/core';
import { stringify } from 'querystring';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private serverElements: { type: string, name: string, content: string; }[] = null;
  
  public constructor() {
    this.serverElements = new Array<{ type: string, name: string, content: string}>();
  }

  public onServerCreated(serverElement:{name: string, content: string }): void {
    this.getServerElements().push({
      type: 'server',
      name: serverElement.name,
      content: serverElement.content
    });
  }

  public onBlueprintCreated(blueprintElement:{type: string, name: string, content: string }):void {
    this.getServerElements().push({
      type: 'blueprint',
      name: blueprintElement.name,
      content: blueprintElement.content
    });
  }
 
  public getServerElements(): { type: string, name: string, content: string}[] {
    return this.serverElements;
  }
  
}
