import type { TaskStateModel } from './TaskStateModel';

export type TaskModel = {
  id: string;
  name: string;
  durationInMinutes: number;
  StartDate: number;
  completeDate: number | null; // quando timer chega ao final
  interruptedDate: number | null; // quando timer é interrompido
  type: keyof TaskStateModel['config'];
};
