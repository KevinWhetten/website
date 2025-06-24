import {Component, OnInit} from '@angular/core';
import {RouterLink} from '@angular/router';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss'],
  imports: [
    RouterLink
  ],
  standalone: true
})
export class NavMenuComponent implements OnInit {
  protected showNavMenu: boolean = false;

  constructor(private responsive: BreakpointObserver) {
  }

  ngOnInit() {
    this.responsive.observe([Breakpoints.HandsetPortrait, Breakpoints.TabletPortrait]).subscribe(result => {
      this.showNavMenu = result.matches;
    })
  }
}
