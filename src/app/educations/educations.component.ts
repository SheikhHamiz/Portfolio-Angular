import { animate, style, transition, trigger } from '@angular/animations';
import { DatePipe, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { opacity } from 'html2canvas/dist/types/css/property-descriptors/opacity';
import { transform } from 'html2canvas/dist/types/css/property-descriptors/transform';

@Component({
  selector: 'app-educations',
  standalone: true,
  imports: [NgFor,DatePipe],
  templateUrl: './educations.component.html',
  styleUrl: './educations.component.css',
})
export class EducationsComponent {
  education = [
    {
      institute:"Government College Of Engineering and Technology",
      course:"Bachelors Degree in Computer Engineering",
      cgpa:8.2,
      endDate:new Date("09/01/2023")
    }
  ];

  // scrollAnimation(e:any) {
  //   let elem = document.querySelector("#education");
  //   elem?.classList.add("");
  // }
  
}
