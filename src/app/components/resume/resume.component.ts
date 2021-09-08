import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.sass']
})
export class ResumeComponent implements OnInit {

  activeClass = 0;

  constructor() { }

  ngOnInit(): void {
  }

  updateContent(activeClass: number) {
    this.activeClass = activeClass;
  }

}
