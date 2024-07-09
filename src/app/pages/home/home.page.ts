import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  cardHovered: boolean = false;

  constructor(private router: Router) {}

  redireccionar(ruta: string){
    this.router.navigate([ruta]);
  }

}
