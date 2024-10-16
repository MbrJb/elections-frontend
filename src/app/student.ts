import {Vote} from "./vote";

export interface Student {
  id: number;
  name: string;
  hasVoted: boolean;
  vote: Vote;
}
