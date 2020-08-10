import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  items = [
    {
      title: 'INICIO',
      color: '#0596be',
      icon: 'person',
      link: ''
    },
    {
      title: 'SERVICIOS',
      color: '#d47700',
      icon: 'grade',
      link: ''
    },
    {
      title: 'EXPANSANC',
      color: '#7ac943',
      icon: 'favorite',
      link: ''
    },
    {
      title: 'LEGAL',
      color: '#f85272',
      icon: 'lock',
      link: ''
    },
    {
      title: 'CLIENTES',
      color: '#9e27b5',
      icon: 'chat_bubble',
      link: ''
    },
    {
      title: 'CONTACTOS',
      color: '#006f97',
      icon: 'smartphone',
      link: ''
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
