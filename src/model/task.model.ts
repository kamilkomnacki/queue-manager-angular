export class Task {
  id: number;
  title: string;
  description: string;
  creationDate: Date; // Zobacz czy to odpowiedni typ daty
  startDate: Date;
  endDate: Date;
  completed: boolean;
}
