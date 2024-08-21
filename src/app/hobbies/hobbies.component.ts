import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBook, faCaretDown, faFutbol, faGamepad } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-hobbies',
  standalone: true,
  imports: [NgFor, FontAwesomeModule, NgIf],
  templateUrl: './hobbies.component.html',
  styleUrl: './hobbies.component.css'
})
export class HobbiesComponent {
  dropdown = faCaretDown;
  football = faFutbol;
  games = faGamepad;
  book = faBook;
  showHobbies = true;
  listOfHobbies = [ 
    {name:"Football", icon: this.football} , 
    {name:"Video games", icon: this.games}, 
    {name:"Book Reading", icon:this.book}
  ];
  onClick() {
    this.showHobbies = !this.showHobbies;
  }
  displayHobbies() {
    return this.showHobbies;
  }
}
