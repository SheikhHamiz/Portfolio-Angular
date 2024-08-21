import { DatePipe, JsonPipe, NgClass, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [NgFor,JsonPipe, DatePipe, FontAwesomeModule, NgClass],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {

  circle = faCircle;

  selected = [true, false];

  select = "selected";

  unselect = "";

  index = 1;

  onClick(i:number) {
    this.index = i+1;
    for(let j = 0; j <= i; j++) {
      this.selected[j] = true;
    }
    for( let j = i+1; j < this.selected.length; j++ ) {
      this.selected[j] = false;
    }
  }

  experience = [
    {
      companyName: "VOIS Innovation Marathon",
      title:"Project Intern",
      startDate: new Date("06/01/2022"),
      endDate:new Date("08/01/2022"),
      desc:
            "Created a cloud pricing calculator It predicts the cost of cloud services for vendors such as AWS, GCP, and Azure based on user input such as vendor name, OS, and region. "
    },
    { companyName:"National Institute of Technology, Srinagar", 
      title: "Project Intern",
      startDate: new Date("04/04/2023"),
      endDate:new Date("07/04/2023"), 
      desc:
            "Created an app that simulates a car. CNN Modal is used to simulate an autonomous car in the virtual worldonce it has been trained in the virtual world. "
    },
  ];

}
