import { Injectable } from "@angular/core";
import { Course } from "./course.model";


//Definimos un Injectable para que se puede usar en cualquier componente
@Injectable({

  providedIn: 'root'

})


export class StaticDataSource {
  //Variable privada para pasarle una colección de los cursos
  private data: Course[];

  constructor() {

    this.data = new Array<Course>(


      new Course(1, "Angular", 10, "John Jones", {
        description: "Curso avanzado de Angular",
        skills: ["Angular", "TypeScript"]
      }),

      new Course(2, "React", 12, "Sarah Miller", {
        description: "Fundamentos de React y creación de componentes reutilizables",
        skills: ["React"]
      }),

      new Course(3, "Node.js", 8, "David Johnson", {
        description: "Back-end con Node.js y Express basado en prácticas reales",
        skills: ["Node.js", "JavaScript"]
      }),

      new Course(4, "C(Sharp)", 15, "John Jones", {
        description: "Programación orientada a objetos con C# desde cero",
        skills: ["C#", "OOP", "DotNet"]
      }),

      new Course(5, "Python", 9, "Laura Smith", {
        description: "Python para análisis de datos y automatización",
        skills: ["Python", "Pandas"]
      }),

      new Course(6, "Java", 14, "Laura Smith", {
        description: "Curso completo de Java para aplicaciones empresariales",
        skills: ["Java"]
      }),

      new Course(7, "TypeScript", 6, "John Jones", {
        description: "TypeScript moderno aplicado a proyectos web",
        skills: ["TypeScript", "JavaScript", "ES6"]
      })

    );

  }

  getData(): Course[] {

    return this.data;
  }

}
