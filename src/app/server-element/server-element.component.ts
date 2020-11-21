import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit {

  @Input('srvElement')
  private element: { type: string, name: string, content: string; } = null;
  
  constructor() {

  }

  ngOnInit(): void {
  }

  public getElement(): { type: string, name: string, content: string; } {
    return this.element;
  }

}
