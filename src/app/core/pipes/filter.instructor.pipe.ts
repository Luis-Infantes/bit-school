import { Pipe, PipeTransform } from '@angular/core';
import { Course } from '../../models/course.model';

@Pipe({
  name: 'filterInstructorPipe',
})

//Filtro para instructores a traves de una pipe
export class FilterInstructorPipe implements PipeTransform {

  transform(course: Course[] | undefined, instructor: string): Course[] {

    if (!course) return [];

    if (instructor === 'None' || instructor === undefined) {

      return course;
    }

    return course.filter(p => p.instructorName === instructor);


  }

}
