import {Duration} from './Duration';

export interface Task {
  id: number;
  name: string;
  projectId: number;
  priority: number;
  duration: Duration;
  expirationDate: string;
}
