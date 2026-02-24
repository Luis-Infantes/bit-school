
Bit School — Course Management - Angular Project
A project in which I developed an Angular app for course management, allowing dynamic and efficient CRUD operations (Create, Read, Update, and Delete).
Project Structure:
The main logic resides in src/app.
Models Folder (Data Layer)

Model file containing the definition of the data models used in the application.
Repository file that contains the business logic and the generic CRUD methods to manage courses.
RestDataSource file, which is the initial data source linked to a JSON file that simulates a database.


Core Folder (Application Layer)
Components:

TableCourses Component: Displays data in a table format, with options to edit or delete.
FormCourses Component: Handles data input or editing with generic and custom validations.

Directives:

ControlError: Custom directive for centralized error message handling in forms.
Row Highlight (hover): Visual enhancement to highlight table rows on hover.

Pipes:

Custom filter pipe to perform a search by instructor name.

Services:

ValidationService: Handles generic and custom validations.


Main Features:

I used a service to group all generic and custom validations. The goal was to explore how everything works this way.
I implemented the most generic validations to reuse them across different fields.
I created a custom validation to avoid duplicate skills when adding two or more during creation or editing.
I created a custom validation to prevent duplicate course titles by comparing the new value with the existing table data.
I designed a custom pipe to filter instructor names in real time.
Routing configuration to navigate through buttons to the creation or editing form.


-------------------------------------------------------------------------------------

Bit School -- Gestión de Cursos - Angular Project

Proyecto en el cual he desarrollado una app en Angular para la gestión de cursos, permitiendo realizar operaciones CRUD (Crear, Leer, Actualizar y Borrar) de forma dinámica y eficiente.

Estructura del Proyecto:

La lógica principal reside en src/app.

Carpeta Models (Capa de Datos)

Archivo modelo que contiene la definición de los modelos de datos con los que trabajamos.

Archivo repesitory que contiene la lógica de negocio y los métodos CRUD genéricos para gestionar los cursos.

Archivo de restdatasource que es la fuente de datos inicial vinculada a un archivo Json que simula a una base de datos.

---------

Carpeta Core (Capa de Aplicación)


Components:

Componente TableCourses: Visualización de datos en formato tabla. Con opción a editar o eliminar.

Componente FormCourses: Gestión de entrada o edición de datos con validaciones genéricas y personalizadas.



Directives:

ControlError: Directiva personalizada para la gestión centralizada de mensajes de error en formularios.
Resaltado (hover) en filas de la tabla para mejorar la navegación visual.


Pipes:

Filtro personalizado para realizar una búsqueda por nombre del instructor.




Services:

ValidationService: Gestión de las validaciones genéricas y personalizadas.

---------

Características Principales:

He usado un servicio para englobar todas las validaciones genericas y las personalizas. La finalizadad es ver como funciona todo de esta forma.

He gestionado la validaciones más genéricas para luego aplicarlas en cada campo

He creado una validacion personaliza para evitar duplicados en skills al editar o crear, cuando añadimos dos o más.

He creado una validacion personalizada para evitar duplicados en el titulo del curso. Contrastará la información introducida con la que hay en la tabla.

He diseñado una pipe personalizada para realizar un filtro del nombre del instructor en el momento.

Configuración del routing para navegar a través de los botones al formulario de creación o de edición.




