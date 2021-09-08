import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-resume-tabs',
  templateUrl: './resume-tabs.component.html',
  styleUrls: ['./resume-tabs.component.sass']
})
export class ResumeTabsComponent implements OnInit {

  @Output() activeClassEvent = new EventEmitter<number>();
  activeClass = 0

  constructor() { }

  ngOnInit(): void {
  }

  changeActiveClass(event: any) {
    const target = event.target || event.srcElement || event.currentTarget;
    const elementID = target.attributes.id.nodeValue;
    switch(elementID) {
      case "education":
        this.activeClass = 0;
        break;
      case "experience":
        this.activeClass = 1;
        break;
      case "projects":
        this.activeClass = 2;
        break;
      case "leadership":
        this.activeClass = 3;
        break;
      case "skills":
        this.activeClass = 4;
        break;
    }
    this.activeClassEvent.emit(this.activeClass);
  }

}
