import { Component } from '@angular/core';
import { WelcomeSectionComponent } from '../welcome-section/welcome-section.component';
import { ToolsSectionComponent } from '../tools-section/tools-section.component';
import { CategoriesSectionComponent } from '../categories-section/categories-section.component';
import { ConnectSectionComponent } from '../connect-section/connect-section.component';
import { PostVacancySectionComponent } from '../post-vacancy-section/post-vacancy-section.component';

@Component({
  selector: 'app-main',
  imports: [WelcomeSectionComponent, ToolsSectionComponent, CategoriesSectionComponent, ConnectSectionComponent,PostVacancySectionComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
