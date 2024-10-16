import { Component } from '@angular/core';
import {VoteService} from "../vote.service";
import {NgForOf} from "@angular/common";
import {Candidate} from "../candidate";
import {CandidateService} from "../candidate.service";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  standalone: true,
  imports: [
    NgForOf
  ],
  styleUrl: './vote.component.scss'
})
export class VoteComponent {
  public candidates: Candidate[] = [];

  constructor(private candidateService: CandidateService, private voteService: VoteService) {
  }

  ngOnInit() {
    this.getCandidates();
  }

  public getCandidates(): void {
    this.candidateService.getCandidates().subscribe(
      (response: Candidate[]) => {
        this.candidates = response;
        console.log("Candidate", this.candidates);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public castsVote(studentId: number, candidateId: number) {
    this.voteService.castsVote(studentId, candidateId).subscribe(
      response => {
        console.log('Vote cast successfully', response);
        this.getCandidates();
      },
      error => {
        console.error('Error casting vote', error);
      }
    )
  }

}
