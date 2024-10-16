import {Vote} from "./vote";

export interface Candidate {
  id: number;
  name: string;
  slogan: string;
  imageUrl: string;
  numberOfVotes: number;
  votes: Vote[];
}
