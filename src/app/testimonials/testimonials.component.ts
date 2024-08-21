import { NgClass, NgFor } from '@angular/common';
import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCaretLeft, faCaretRight, faQuoteLeft, faQuoteRight, faUserCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [NgFor,FontAwesomeModule, NgClass],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.css'
})
export class TestimonialsComponent {
  user = faUserCircle;
  leftArrow =faCaretLeft;
  rightArrow = faCaretRight;
  quoteLeft = faQuoteLeft;
  quoteRight = faQuoteRight;
  
  animations : string[] = ["animationLeft","animationRight"];
  animationLeft = true;

  leftIndex = 0;
  rightIndex = 2;


  listOfTestimonials = [
    {nameOfWriter:"SDE", testimony:"Hamiz is a very talented developer having keen knowledge in Java programming. He has a great experience in playing with Data."},
    {nameOfWriter:"Frontend developer", testimony:"Hamiz is an excellent developer . I had a pleasure working with him . He always kept the team morale up, and I believe he is the best developer I ever had as he is friendly. His ability to work through the crisis and develop new ways to achieve the targets were always inspiring."},
    {nameOfWriter:"Backend develper", testimony:"Hamiz is an extraordinary developer whose technical prowess and innovative thinking set him apart. His ability to seamlessly integrate cutting-edge technologies and deliver flawless solutions is truly remarkable. Hamiz’s positive attitude and unwavering dedication to excellence inspire everyone around him, making him an invaluable asset to any team."},
    {nameOfWriter:"Principle engineer", testimony:"Must say!! Hamiz has excellence in whatever he chose to work on. He is Ridiculously efficient. He can juggle multiple projects at a same time and yes, he is an asset to his team. If you’re looking for a colleague, collaborator, manager, or leader on your team, I can’t think of anyone I’d recommend more highly."},
  ];

  shiftLeftRightCarousel(by:number){
    if(by === 2) {
      if(this.rightIndex < this.listOfTestimonials.length){
        this.leftIndex += by;
        this.rightIndex += by;
        this.animationLeft= false;
      }
      
    } else {
      if(this.leftIndex > 0){
        this.leftIndex += by;
        this.rightIndex += by;
        this.animationLeft= true;
      }
    }
  }
}
