import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { EducationsComponent } from './educations/educations.component';
import { ExperienceComponent } from './experience/experience.component';
import { HobbiesComponent } from './hobbies/hobbies.component';
import { SkillsComponent } from './skills/skills.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { ProjectComponent } from './project/project.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,HeaderComponent, EducationsComponent, 
    ExperienceComponent, HobbiesComponent, SkillsComponent,
    TestimonialsComponent, ProjectComponent, ContactFormComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio-app';
}
