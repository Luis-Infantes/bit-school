import { Injectable } from '@angular/core';
import { Modes } from '../../models/course.model';
import { Observable, Subject } from 'rxjs';




//Modelo de datos del tipo interface que incluye los modos de edición y creación, más un id 
export interface stateUpdate {

  mode: Modes;
  id?: number;
}


@Injectable({
  providedIn: 'root',
})


export class ModelStateService {

  //Variable privada del tipo modes que la inicializamos del tipo modo de edición
  private modeValue: Modes = Modes.EditMode;
  //Variable privada para el id que puede haber o no segun el modo
  private idValue?: number;

  //Declaramos variable publica changes como Observable del tipo stateUpdate para que se puedan subscribirse
  public changes: Observable<stateUpdate>; 

  constructor() {

    //Asignamos a la variable el subject para que pueda realizar los cambios
    this.changes = new Subject<stateUpdate>();

  }

  //Métodos para recuperar el id y el valor del modo
  get id(): number | undefined { return this.idValue };

  get mode(): Modes { return this.modeValue };

  //Método update para cambiar el modo dependiendo de si hay id o no

  updateMode(mode: Modes, id?: number) {

    this.modeValue = mode;
    this.idValue = id;

    //Volvemos a recorcar que changes es un subject para que con el next realice los cambios
    (this.changes as Subject<stateUpdate>).next({

      mode: this.modeValue, id: this.idValue

    })

  }

  
}
