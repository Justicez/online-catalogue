import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() headerItems: HeaderItems[];

  constructor() { }

  ngOnInit(): void {
  }

  public logOut(): void {
    sessionStorage.removeItem('user');
  }
}

export class HeaderItems {
  label: string;
  url: string;
}
