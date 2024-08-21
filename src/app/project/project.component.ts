import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { image } from 'html2canvas/dist/types/css/types/image';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [NgFor],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectComponent {
  projects = [
    {
      name:"Jewellery website",
      image:"assets/p1.png",
      desc:"The project involved creating an elegant jewelry website with a refined aesthetic, user-friendly interface, and interactive elements. Key features include elegant design, product display, and interactive elements like zoomable images and quick view options. The website adapts seamlessly across devices and enhances the browsing experience, showcasing the luxury of jewelry and providing an enjoyable shopping journey."
    },
    {
      name:"Weather app",
      image:"assets/p2.png",
      desc:"The project involved creating a modern, user-friendly weather app for any city worldwide. The app features a clean, contemporary design, allowing users to easily search for updates. It provides detailed weather forecasts with dynamic visuals and icons, and adapts smoothly across all devices for a consistent and enjoyable experience."
    },
    {
      name:"Travelling blog",
      image:"assets/p3.png",
      desc:"The project involved designing a travel blog app with an elegant design, an intuitive interface, and interactive elements. The app showcases diverse travel content, is optimized for all devices, and includes map integrations, interactive galleries, and social sharing options. The goal was to create a visually appealing and engaging experience for users, fostering exploration and interaction with diverse travel content."
    },
    {
      name:"Calculator",
      image:"assets/p4.png",
      desc:"The SimpleCalc Calculator App is a user-friendly calculator app designed for basic arithmetic operations. It features a minimalist design, clear controls for addition, subtraction, multiplication, and division, and a responsive layout optimized for various devices. The app also includes an interactive number pad, easy-to-read display, and immediate calculation feedback for convenience."
    }
  ];
}
