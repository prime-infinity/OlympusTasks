import Dexie from 'dexie';
import { Task } from '../interfaces/ITask';

class TaskDatabase extends Dexie{
    tasks!:Dexie.Table<Task, number>;
    constructor() {
        super('TaskDatabase');
        this.version(1).stores({
          tasks: '++id,name,note,pinned,date,category',
        });
      }
}

export const taskDB = new TaskDatabase();