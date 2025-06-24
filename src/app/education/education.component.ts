import {Component, OnInit} from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['education.component.scss'],
  standalone: true
})
export class EducationComponent implements OnInit {
  protected portraitMode: boolean = false;

  constructor(private responsive: BreakpointObserver) {
  }

  ngOnInit() {
    this.responsive.observe([Breakpoints.HandsetPortrait, Breakpoints.TabletPortrait]).subscribe(result => {
      this.portraitMode = result.matches;
    })
  }
}
