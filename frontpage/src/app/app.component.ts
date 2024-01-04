import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { AppRoutingModule,routingComponents } from './app-routing.module';
//import { EmitterVisitorContext } from '@angular/compiler';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, 
    RouterOutlet,  
    RouterLink,
    routingComponents],
  templateUrl: `./app.component.html`,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontpage';
}
