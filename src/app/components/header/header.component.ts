import { Component } from '@angular/core';
import { LogoComponent } from '../../logo/logo.component';
import { SignInButtonComponent } from '../../sign-in-button/sign-in-button.component';
import { SignUpButtonComponent } from '../../sign-up-button/sign-up-button.component';

@Component({
  selector: 'app-header',
  imports: [LogoComponent, SignInButtonComponent, SignUpButtonComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
