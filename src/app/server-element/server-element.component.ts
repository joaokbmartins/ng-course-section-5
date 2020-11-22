import {
  Component,
  Input,
  OnInit,
  ViewEncapsulation,
  OnChanges,
  SimpleChanges,
  DoCheck, 
  AfterContentInit,
  AfterContentChecked,
  AfterViewChecked,
  AfterViewInit,
  OnDestroy,
  ViewChild,
  ElementRef,
  ContentChild
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated, // None / Native
})
export class ServerElementComponent implements
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy
{

  // @Input('srvElement')
  // private serverElement: { type: string, name: string, content: string; } = null;

  @Input('srvName')
  private name: string = null;

  @ViewChild('headerHook', { static: true })
  private header: ElementRef = null;

  @ContentChild('contentParagraph')
  private paragraph: ElementRef = null;
  
  public constructor() {
    console.log('constructor called');
    console.log('PARAGRAPH: ', this.paragraph);
  }

  public ngOnChanges(changes: SimpleChanges) {
    // console.log('changes: ', changes);
    console.log('ngOnChanges called');
    console.log('PARAGRAPH: ', this.paragraph);
  }

  public ngOnInit(): void {
    console.log('ngOnInit called');
    console.log('Text content: ', this.header.nativeElement.textContent);
    console.log('PARAGRAPH: ', this.paragraph);
  }

  public ngDoCheck() {
    console.log('ngDoCheck called');
  }

  public ngAfterContentInit() {
    console.log('ngAfterContentInit called');
    console.log('PARAGRAPH: ', this.paragraph);
    console.log('PARAGRAPH: ', this.paragraph.nativeElement.textContent);
  }

  public ngAfterContentChecked() {
    console.log('ngAfterContentChecked called');
    console.log('Text content: ', this.header.nativeElement.textContent);
  }

  public ngAfterViewInit() {
    console.log('ngAfterViewInit called');
  }

  public ngAfterViewChecked() {
    console.log('ngAfterViewChecked called');
  }

  public ngOnDestroy() {
    console.log('ngOnDestroy called');
  }

  public getName(): string {
    return this.name;
  }

}
