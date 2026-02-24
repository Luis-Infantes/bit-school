

## Bit School -- Gestión de Cursos - Angular Project

Proyecto en el cual he desarrollado una app en Angular para la gestión de cursos, permitiendo realizar operaciones CRUD (Crear, Leer, Actualizar y Borrar) de forma dinámica y eficiente.

### Estructura del Proyecto:

La lógica principal reside en src/app.

### Carpeta Models (Capa de Datos)

# Archivo modelo que contiene la definición de los modelos de datos con los que trabajamos.

# Archivo repesitory que contiene la lógica de negocio y los métodos CRUD genéricos para gestionar los cursos.

# Archivo de datasource que es la fuente de datos inicial con ejemplos para pruebas.

---------

### Carpeta Core (Capa de Aplicación)


##Components:

# Componente TableCourses: Visualización de datos en formato tabla. Con opción a editar o eliminar.

# Componente FormCourses: Gestión de entrada o edición de datos con validaciones genéricas y personalizadas.



##Directives:

# ControlError: Directiva personalizada para la gestión centralizada de mensajes de error en formularios.



## Pipes:

# Filtro personalizado para realizar una búsqueda por nombre del instructor.



## Services:

# ModelStateService: Gestiona el estado global del formulario. Si esta en modo edición o en modo creación.

# ValidationService: Gestión de las validaciones genéricas y personalizadas.

---------

## Características Principales:

# He usado un servicio para englobar todas las validaciones genericas y las personalizas. La finalizadad es ver como funciona todo de esta forma.

# He gestionado la validaciones más genéricas para luego aplicarlas en cada campo

# He creado una validacion personaliza para evitar duplicados en skills al editar o crear, cuando añadimos dos o más.

# He creado una validacion personalizada para evitar duplicados en el titulo del curso. Contrastará la información introducida con la que hay en la tabla.

# He diseñado una pipe personalizada para realizar un filtro del nombre del instructor en el momento.

# He realizado a través de un servicio una gestión para cambiar el estado del formulario del modo edición a creación.
