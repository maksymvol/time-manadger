import {Tag} from './Tag';

export interface Task {
  isFitInDay: boolean;
  id: number;
  name: string;
  projectId: number;
  priority: number;
  duration: string;
  startDate: string;
  tags: Tag[];
}
