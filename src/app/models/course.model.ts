


//Modelo de datos de los cursos

export class Course {

  constructor(

    public id?: number,
    public title?: string,
    public seatCapacity?: number,
    public instructorName?: string,
    public details?: Details


  ) { }

}

//Modelo extra de detalles que incluye la descripción y un array con las skills
export class Details {

  constructor(

    public description?: string,
    public skills?: string[]


  ) { }

}

//Modelo enum para cambiar de estado de creacion a editar
export enum Modes {

  CreateMode, EditMode
}
