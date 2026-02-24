import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable, Inject, InjectionToken } from '@angular/core';
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { Course } from './course.model';


export const REST_URL = new InjectionToken<string>("rest_url");

@Injectable({
  providedIn: "root"
})

export class RestDataSource {

  constructor(
    private http: HttpClient,
    @Inject(REST_URL) private url: string
  ) { }

  getData(): Observable<Course[]> {

    return this.sendRequest<Course[]>("GET", this.url);
  }

  saveCourse(course: Course): Observable<Course> {
    return this.sendRequest<Course>("POST", this.url, course);
  }

  updateCourse(course: Course): Observable<Course> {

    return this.sendRequest<Course>("PUT", `${this.url}/${course.id}`, course);
  }

  deleteCourse(id: number): Observable<Course> {

    return this.sendRequest<Course>("DELETE", `${this.url}/${id}`);
  }

  private sendRequest<T>(verb: string, url: string, body?: Course): Observable<T> {
    let myHeaders = new HttpHeaders()
      .set("Access-Key", "<Secret>")
      .set("Application-Names", ["exampleApp", "proAngular"]);

    return this.http.request<T>(verb, url, {
      body: body,
      headers: myHeaders
    }).pipe(
      catchError((error: HttpErrorResponse) => {
        // Usamos throwError con una factoría para lanzar el error correctamente
        return throwError(() => `Network Error: ${error.statusText} (${error.status})`);
      })
    );
  }
}
