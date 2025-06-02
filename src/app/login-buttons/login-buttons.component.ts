import { Component } from '@angular/core';
import { GoogleButtonComponent } from '../google-button/google-button.component';
import { EmailButtonComponent } from '../email-button/email-button.component';

@Component({
  selector: 'app-login-buttons',
  imports: [GoogleButtonComponent, EmailButtonComponent],
  templateUrl: './login-buttons.component.html',
  styleUrl: './login-buttons.component.css'
})
export class LoginButtonsComponent {

}
