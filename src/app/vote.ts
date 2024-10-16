import {Candidate} from "./candidate";
import {Student} from "./student";

export interface Vote {
  id: number;
  votingDate: Date;
  candidate: Candidate;
  student: Student;
}
