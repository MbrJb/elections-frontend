import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Candidate} from "./candidate";
import {environment} from "../environments/environment.development";

@Injectable({providedIn: 'root'})
export class CandidateService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getCandidates(): Observable<Candidate[]> {
    return this.http.get<Candidate[]>(`${this.apiServerUrl}/candidates`);
  }

  public addCandidate(candidate: Candidate): Observable<Candidate> {
    return this.http.post<Candidate>(`${this.apiServerUrl}/candidates/add`, candidate);
  }

  public updateCandidate(candidate: Candidate): Observable<Candidate>{
    return this.http.put<Candidate>(`${this.apiServerUrl}/candidates/update`, candidate);
  }

  public deleteCandidate(candidateId: number):Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/candidates/delete/${candidateId}`);


  }
}
