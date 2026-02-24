import { Component, signal } from '@angular/core';
import { TableCoursesComponent } from './core/components/table-courses/table-courses';
import { FormCoursesComponent } from './core/components/form-courses/form-courses';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TableCoursesComponent, FormCoursesComponent, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  //En este archivo solo importamos TableCoursesComponent, FormCoursesComponent en este caso


}
