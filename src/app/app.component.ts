 
import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  mostrarBarraNavegacion: boolean = true;
  title = 'BoletosFront';
  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        if (event.url === '/Ingresar' || event.url === '/editar/:id' || event.url === '/Ingresares') {
          this.mostrarBarraNavegacion = false;
        } else {
          this.mostrarBarraNavegacion = true;
        }
      }
    });
  }
}
