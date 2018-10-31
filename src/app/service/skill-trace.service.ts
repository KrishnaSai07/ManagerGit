import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Skill } from '../model/skill';
import { Observable  } from 'rxjs';
import { map } from 'rxjs/operators';
import { SkillRequest } from '../model/skill-request';
import { Employee } from '../model/employee';
import { EmployeeSkill } from '../model/employee-skill';
import { CourseEmployee } from '../model/course-employee';
import { ManagerRequest } from '../model/manager-request';

@Injectable({
  providedIn: 'root'
})
export class SkillTraceService {

  baseUrl: string;
  baseUrl1: string;
  baseUrl2: string;
  baseUrl3: string;
  baseUrl4: string;
  baseUrl5: string;
  baseUrl6: string;
  constructor(private http: Http) { 
    this.baseUrl = "http://localhost:2020/skill";
    this.baseUrl1 = "http://localhost:2020/EmployeeRequest";
    this.baseUrl2 = "http://localhost:2020/EmployeeRequestDel";
    this.baseUrl3 = "http://localhost:2020/EmployeeData";
    this.baseUrl4 = "http://localhost:2020/EmployeeSkill";
    this.baseUrl5 = "http://localhost:2020/CourseEmployee";
    this.baseUrl6 = "http://localhost:2020/ManagerRequest"
  }

  getBaseUrl1ById(id: number): string {
    return this.baseUrl1 + '/' + id;
  }

  getBaseUrl2ById(id: number): string {
    return this.baseUrl2 + '/' + id;
  }

  getBaseUrl3ById(id: number): string {
    return this.baseUrl3 + '/' + id;
  }

  getBaseUrl4ById(id: string): string {
    return this.baseUrl4 + '/' + id;
  }

  getJsonContentTypeHeader(): RequestOptions {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return new RequestOptions({ headers: headers });
  }


  getAllSkills(): Observable<Skill[]> {
    return this.http.get(this.baseUrl).pipe(
      map(data => data.json())
    );
  }

  getAllEmloyees(): Observable<Employee[]> {
    return this.http.get(this.baseUrl3).pipe(
      map(data => data.json())
    );
  }

  getAllRequests(): Observable<SkillRequest[]> {
    return this.http.get(this.baseUrl1).pipe(
      map(data => data.json())
    );
  }

  getAllEmployeeSkills(): Observable<EmployeeSkill[]> {
    return this.http.get(this.baseUrl4).pipe(
      map(data => data.json())
    );
  }

  getRequestById(id: number): Observable<SkillRequest> {
    return this.http.get(this.getBaseUrl1ById(id)).pipe(
      map(data => data.json())
    );
  }

  getEmployeeSkillById(id: string): Observable<EmployeeSkill[]> {
    return this.http.get(this.getBaseUrl4ById(id)).pipe(
      map(data => data.json())
    );
  }

  deleteContactById(id: number): Observable<Response> {
    return this.http.delete(this.getBaseUrl2ById(id));
  }


  getEmployeeById(id: number): Observable<Employee> {
    return this.http.get(this.getBaseUrl3ById(id)).pipe(
      map(data => data.json())
    );
  }

  addCourseEmployee(courseEmp: CourseEmployee): Observable<CourseEmployee> {
    return this.http.post(this.baseUrl5, JSON.stringify(courseEmp), this.getJsonContentTypeHeader()).pipe(
      map(data => data.json())
    );
  }

  addManagerRequest(managerReq: ManagerRequest): Observable<ManagerRequest> {
    return this.http.post(this.baseUrl6, JSON.stringify(managerReq), this.getJsonContentTypeHeader()).pipe(
      map(data => data.json())
    );
  }



}
