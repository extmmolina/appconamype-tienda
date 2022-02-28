import { Component, OnInit } from '@angular/core';
import { AfterViewInit, Input, ViewChild,  ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-expandible',
  templateUrl: './expandible.component.html',
  styleUrls: ['./expandible.component.scss'],
})
export class ExpandibleComponent implements OnInit, AfterViewInit {
  @ViewChild('expandWrapper', { read: ElementRef, static: true }) expandWrapper: ElementRef;

  @Input('expanded') expanded = false;
  @Input('expandHeight') expandHeight = '150px';

  constructor(public renderer: Renderer2) { }

  ngOnInit() {}

  ngAfterViewInit() {
    this.renderer.setStyle(this.expandWrapper.nativeElement, 'max-height', this.expandHeight);
  }

}
