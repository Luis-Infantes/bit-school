import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Course, Modes } from '../../../models/course.model';
import { Model } from '../../../models/repository.model';
import { ModelStateService, stateUpdate} from '../../services/model.state.service';
import { ValidationService } from '../../services/validation.service';
import { ControlErrorDirective } from '../../directives/control-error-directive';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';



@Component({
  selector: 'app-form-courses',
  standalone: true,
  imports: [FormsModule, CommonModule, ReactiveFormsModule, ControlErrorDirective, RouterModule],
  templateUrl: './form-courses.html',
  styleUrl: './form-courses.css',
})
export class FormCoursesComponent {

  //Variable curso del tipo curso la inicializamos como un nuevo curso
  public newCourse: Course = new Course();
  //Variable para cambiar de estado edit a create
  public editing: boolean = false;

  //Variable para crear skils que es un nuevo formArray y dentro un método para crear un nuevo formControl
  public skillGroup = new FormArray([

    this.createSkillControl(),


  ], ValidationService.unique());


  //Método para recuperar las skill como un array
  get skills(): FormArray {
    return this.courseForm.get('details.skills') as FormArray;
  }
  //Variable publica del tipo formgroup
  public courseForm: FormGroup;





  //En el constructor le pasamos el model, el state, el servicio con las validaciones y el formbuilder 
  constructor(
    private model: Model,
    private route: ActivatedRoute,
    private router: Router,
    public validation: ValidationService,
    private fb: FormBuilder
  ) {





    //Definimos los valores finales de las validaciones pasando solo las necesarias para cada campo
    this.courseForm = this.fb.group({

      title: ['', [
        Validators.required,
        Validators.minLength(3),
        Validators.pattern("^[A-Za-z ]+$"),
        ValidationService.courseExists(this.model, () => this.newCourse.id)  
      ]],

      seatCapacity: ['', [Validators.required, Validators.min(1), Validators.pattern("^[0-9\.]+$")]],

      instructorName: ['', [Validators.required, Validators.minLength(3), , Validators.pattern("^[A-Za-z ]+$")]],

      details: this.fb.group({

        description: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(100)]],

        skills: this.skillGroup

      })

    });




    // Suscribirse a cambios de parámetros de ruta​

    this.route.paramMap.subscribe(params => {

      // Comprobamos si el modo es "edit"​

      this.editing = params.get('mode') === 'editCourse';

      console.log('el valor de editing es' + this.editing);




      const idParam = params.get('id');

      if (idParam) {

        const id = idParam; // Convertir a número

        //Subscribe al observable del curso

        this.model.getCourseObservable(id).subscribe(course => {


          if (course) {

            this.newCourse = { ...course };       // Copiamos los datos del producto​

            this.courseForm.patchValue(this.newCourse); // Rellenamos el formulario​

          } else {

            this.newCourse = new Course();
            this.courseForm.reset();


          }

        

        });



      }

    });






  }



  submitForm() {

    if (this.courseForm.valid) {//Si el formulario del curso es valido?

      Object.assign(this.newCourse, this.courseForm.value);//Asiganmos al nuevo curso lo introducido en el courseform
      this.model.saveCourse(this.newCourse);//Salvamos con los nuevos datos
  /*    this.newCourse = new Course();//Limpiamos la variable con un nuevo modelo de curso*/
   /*   this.skillGroup.clear();//Limpiamos el grupo de las skills*/
 /*     this.skillGroup.push(this.createSkillControl())//Añadimos lo introducido en las nuevas skills*/
    /*  this.courseForm.reset();//Reseteamos el formulario del curso*/
      this.router.navigateByUrl("/");
    }

  }
  //Método para resetear los formularios
  resetForm() {//Método para resetear el formulario

    this.editing = true;//Volvemos a activar el modo edición
    this.newCourse = new Course();//Limpiamos la variable con un nuevo modelo de curso
    this.skillGroup.clear();//Limpiamos el grupo de las skills
    this.skillGroup.push(this.createSkillControl())//Añadimos lo introducido en las nuevas skills
    this.courseForm.reset();//Reseteamos el formulario del curso

  }




  //Método para crear un nuevo formcontrol del tipo skill
  createSkillControl(): FormControl {

    return new FormControl('', [

      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20)]);
  }

  //Método para añadir una nueva skill
  addSkillControl() {

    this.skillGroup.push(this.createSkillControl());

  }

  //Método para eliminar una skill
  removeSkillControl(index: number) {

    this.skillGroup.removeAt(index);

  }


}
