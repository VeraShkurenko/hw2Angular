import { Component } from '@angular/core';
import { WelcomeTextComponent } from '../welcome-text/welcome-text.component';
import { LoginButtonsComponent } from '../login-buttons/login-buttons.component';
import { TermsTextComponent } from '../terms-text/terms-text.component';
import { JoinTextComponent } from '../join-text/join-text.component';
import { WelcomeImageComponent } from '../welcome-image/welcome-image.component';

@Component({
  selector: 'app-welcome-section',
  imports: [WelcomeTextComponent,LoginButtonsComponent,TermsTextComponent,JoinTextComponent,WelcomeImageComponent],
  templateUrl: './welcome-section.component.html',
  styleUrl: './welcome-section.component.css'
})
export class WelcomeSectionComponent {

}
