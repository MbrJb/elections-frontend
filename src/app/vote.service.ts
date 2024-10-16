import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../environments/environment.development";
import {Observable} from "rxjs";
import {Candidate} from "./candidate";

@Injectable({
  providedIn: 'root'
})
export class VoteService {

  private apiServerUrl: string = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public castsVote(studentId: number, candidateId: number):Observable<any> {
    return this.http.post<Candidate>(`${this.apiServerUrl}/votes/${studentId}/${candidateId}`, {});
  }
}
