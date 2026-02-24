import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Model } from '../../../models/repository.model';
import { Course, Modes } from '../../../models/course.model';
import { ModelStateService } from '../../services/model.state.service';
import { FilterInstructorPipe } from '../../pipes/filter.instructor.pipe';
import { FormsModule } from '@angular/forms';
import { HighlightDirective } from '../../directives/highlight.directive';
import { RouterModule } from '@angular/router';



@Component({
  selector: 'app-table-courses',
  standalone: true,
  imports: [CommonModule, FilterInstructorPipe, FormsModule, HighlightDirective, RouterModule],
  templateUrl: './table-courses.html',
  styleUrl: './table-courses.css',
})
export class TableCoursesComponent {

  //Variable para inicializar el valor del filtro por defecto
  public selectedInstructor: string = 'None';

  //En el constructor le pasamos como privada el model y el state como pública
  constructor(private model: Model, private state: ModelStateService) { }


  //Metodo para obtener los cursos a través del id
  getCourse(id: number): Course | undefined {

    return this.model.getCourse(id);
  }

  //Método para obtener todos los cursos
  getCourses(): Course[] {

    return this.model.getCourses();

  }


  //Método para editar un curso a través del id
  editCourse(id?: number) {

    this.state.updateMode(Modes.EditMode, id);
  }


  //Método para eliminar un curso a través del id
  deleteCourse(id?: number) {
    //Error silencioso
    if (id != undefined) {

      this.model.deleteCourse(id);

      this.state.updateMode(Modes.CreateMode);

    }

  }

  // Método para obtener la lista de nombres de los instructores sin repetir
  getUniqueInstructors(): string[] {
    const courses = this.model.getCourses();

    //Extraemos nombres y filtramos 
    const names = courses
      .map(c => c.instructorName)
      .filter((n): n is string => !!n && n.trim() !== '');

    //Usamos el Set y convertimos a Array de nuevo
    return Array.from(new Set(names));
  }



  //Definimos el método de crear curso para poder gestionarlo desde el formulario
  createCourse() {

    this.state.updateMode(Modes.CreateMode);

  }


}
