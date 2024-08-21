import { NgClass, NgFor, NgIf} from '@angular/common';
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faAngular, faCss3, faHtml5, faJava, faJs, faReact } from '@fortawesome/free-brands-svg-icons';
import { faBrain, faComments, faLeaf, faLightbulb, faStar, faUsersLine } from '@fortawesome/free-solid-svg-icons';

interface Skills {
  name : string,
  proficiency: number,
  icon:any
};

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [NgFor, FontAwesomeModule, NgClass, NgIf],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})

export class SkillsComponent {

  star = faStar;
  angular = faAngular;
  java = faJava;
  javaScript = faJs;
  react = faReact;
  html = faHtml5;
  css = faCss3;
  spring = faLeaf;

  solving = faLightbulb;
  communication = faComments;
  teamwork = faUsersLine;
  creativity = faBrain;


  getProficiency(i:number, item:Skills) {
    if(i <= item.proficiency) return "star-gold";
    return "";
  }


  technicalSkills : Skills[] = [
    {name:"Java", proficiency:5,icon: this.java},
    {name:"JavaScript", proficiency:5,icon: this.javaScript},
    {name:"Spring boot", proficiency:5,icon:this.spring},
    {name:"React", proficiency:5,icon:this.react},
    {name:"Angular", proficiency:5,icon:this.angular},
    {name:"HTML", proficiency:5,icon:this.html},
    {name:"CSS", proficiency:5,icon: this.css}
  ];
  softSkills : Skills[] = [
    {name : "Problem solving", proficiency:5, icon:this.solving},
    {name : "Communication", proficiency:5, icon:this.communication},
    {name : "Teamwork and Collabration", proficiency:5, icon:this.teamwork},
    {name : "Creative", proficiency:5, icon:this.creativity}
  ];
  skillTypes :string[] = ["technicalSkills","softSkills"];
  getIndex(i:number,item:Skills,items:string) {

    if(items === "technicalSkills") {
      this.technicalSkills.forEach(s=> {
        if(s.name === item.name) {
          s.proficiency = i;
        }
      });
    } else {
      this.softSkills.forEach(s=> {
        if(s.name === item.name) {
          s.proficiency = i;
        }
      })
    }
  }
}
