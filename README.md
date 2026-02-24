BIT SCHOOL — Course Management - Angular Project
Project in which I developed an Angular app for course management, allowing dynamic and efficient CRUD operations (Create, Read, Update, and Delete).

---------

PROJECT STRUCTURE:
The main logic resides in src/app.
Models Folder (Data Layer)

Model file that contains the definition of the data models we work with.
Repository file that contains the business logic and the generic CRUD methods used to manage the courses.
RestDataSource file, which is the initial data source linked to a JSON file that simulates a database.

---------

CORE (Application Layer)
COMPONENTS:

TableCourses Component: Data visualization in table format, with options to edit or delete.
FormCourses Component: Handles data input or editing with generic and custom validations.

DIRECTIVES:

ControlError: Custom directive for centralized error message handling in forms.
Highlight (hover) effect on table rows to improve visual navigation.

PIPES:

Custom filter to perform a search by instructor name.

SERVICES:

ValidationService: Manages generic and custom validations.

---------

MAIN FEATURES:

Service created to group all generic and custom validations. The purpose is to understand how everything works this way.
Management of the most generic validations to later apply them to each field.
Custom validation created to avoid duplicate skills when adding two or more during editing or creation.
Custom validation created to prevent duplicate course titles by comparing the entered information with the data already in the table.
Custom pipe designed to filter instructor names instantly.
Routing configuration to navigate through the buttons to the creation or editing form.

---------

PROJECT SETUP:

1) Clone the repo (or unzip the project)

git clone https://github.com/Luis-Infantes/bit-school
cd bit-school

2) Install dependencies

  npm install

3) Start the data source (localhost:3500)
  
  npm run json
  
4) Start the application in another terminal (localhost:4200)

   ng serve



---------



BIT SCHOOL -- Gestión de Cursos - Angular Project

Proyecto en el cual he desarrollado una app en Angular para la gestión de cursos, permitiendo realizar operaciones CRUD (Crear, Leer, Actualizar y Borrar) de forma dinámica y eficiente.

---------

ESTRUCTURA DEL PROYECTO:

La lógica principal reside en src/app.

Carpeta Models (Capa de Datos)

Archivo modelo que contiene la definición de los modelos de datos con los que trabajamos.

Archivo repesitory que contiene la lógica de negocio y los métodos CRUD genéricos para gestionar los cursos.

Archivo de restdatasource que es la fuente de datos inicial vinculada a un archivo Json que simula a una base de datos.

---------

CORE (Capa de Aplicación)


COMPONENTES:

Componente TableCourses: Visualización de datos en formato tabla. Con opción a editar o eliminar.

Componente FormCourses: Gestión de entrada o edición de datos con validaciones genéricas y personalizadas.



DIRECTIVAS:

ControlError: Directiva personalizada para la gestión centralizada de mensajes de error en formularios.

Resaltado (hover) en filas de la tabla para mejorar la navegación visual.


PIES:

Filtro personalizado para realizar una búsqueda por nombre del instructor.




SERVICES:

ValidationService: Gestión de las validaciones genéricas y personalizadas.

---------

CARACTERISTICAS PRINCIPALES:

Servicio para englobar todas las validaciones genericas y las personalizas. La finalizadad es ver como funciona todo de esta forma.

Gestión de las validaciones más genéricas para luego aplicarlas en cada campo

Creación de una validacion personaliza para evitar duplicados en skills al editar o crear, cuando añadimos dos o más.

Creación de una validacion personalizada para evitar duplicados en el titulo del curso. Contrastará la información introducida con la que hay en la tabla.

Diseño de una pipe personalizada para realizar un filtro del nombre del instructor en el momento.

Configuración del routing para navegar a través de los botones al formulario de creación o de edición.

---------

ARRANQUE DEL PROYECTO:


1) Clonar el repo (o descomprime el ZIP)
git clone https://github.com/Luis-Infantes/bit-school
cd bit-school

2) Instalar dependencias
npm install

3) Arrancar la fuente de datos (localhost:3500)
npm run json

4) Arrancar la aplicación en otra consola (localhost:4200)
ng serve
   
