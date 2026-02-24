import { Injectable } from "@angular/core";
import { Course } from "./course.model";
import { StaticDataSource } from "./static.dataSource.model";
import { RestDataSource } from "./rest.datasource";
import { Observable, ReplaySubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})


export class Model {

  //Variable privada para pasarle la colección de cursos
  private courses: Course[] = new Array<Course>();

  //Método privado para localizar el id de cada curso
  private locator = (c: Course, id: number) => c.id === id;

  //Método para generar un ID a cada curso nuevo a partir de 100
  private generateID(): number {

    let candidate = 100;

    while (this.getCourse(candidate) != null) {
      candidate++;
    }
    return candidate;
  }


  private replaySubject: ReplaySubject<Course[]>;




  //Constructor con variable privada del tipo staticdatasource para que contenga los datos base
  constructor(private dataSource: RestDataSource) {

    //Guarda y muestra en el formulario el último curso guardado en memoria
    this.replaySubject = new ReplaySubject<Course[]>(1);


    //A la variable courses le pasamos como valor un nuevo array del tipo Course
/*    this.courses = new Array<Course>();*/
    //Tras inyectar en el constructor llamamos a dataSource a traves de su étodo de getData
    /* this.dataSource.getData().forEach(d => this.courses.push(d))*/

    this.dataSource.getData().subscribe(data => {

      this.courses = data;

      this.replaySubject.next(data);
      this.replaySubject.complete();

    });

  }

  //Método para listar los cursos
  getCourses(): Course[] {

    return this.courses;

  }

  //Método para obtener un curso a través de su id
  getCourse(id: number): Course | undefined {
    return this.courses.find(c => this.locator(c, id));
  }



  getCourseObservable(id: any): Observable<Course | undefined> {

    let subject = new ReplaySubject<Course | undefined>(1);

    this.replaySubject.subscribe(courses => {

      subject.next(courses.find(c => this.locator(c, id)));
      subject.complete();

    });

    return subject;

  }


  //Método para salvar un nuevo curso creado 
  saveCourse(course: any) {

    if (course.id == 0 || course.id == null) {


      this.dataSource.saveCourse(course).subscribe(c => this.courses.push(c));

    } else {


      this.dataSource.updateCourse(course).subscribe(c => {

        let index = this.courses
          .findIndex(c => this.locator(c, course.id));
        this.courses.splice(index, 1, course);

      });

      
    }
  }

  //Método para eliminar un curso a través de su ID
  deleteCourse(id: number) {


    this.dataSource.deleteCourse(id).subscribe(() => {

      let index = this.courses.findIndex(c => this.locator(c, id));

      if (index > -1) {

        this.courses.splice(index, 1);
      }

    })

   
  }


  //Private generateID


}

