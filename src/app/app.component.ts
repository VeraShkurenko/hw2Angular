import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, MainComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'hw2';
}
