import { Injectable } from '@angular/core';
import {environment} from "../environments/environment.development";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Student} from "./student";

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private apiServerUrl: string = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(`${this.apiServerUrl}/students`);
  }

  public addNewStudent(student: Student): Observable<Student> {
    return this.http.post<Student>(`${this.apiServerUrl}/students/add`, student);
  }

  public updateStudentName(student: Student): Observable<Student>{
    return this.http.put<Student>(`${this.apiServerUrl}/students/update`, student);
  }

  public deleteStudent(studentId: number):Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/students/delete/${studentId}`);

  }
}
