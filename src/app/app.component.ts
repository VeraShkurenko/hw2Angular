import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { LogoComponent } from './logo/logo.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, LogoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'hw2';
}
