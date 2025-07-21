import type { TaskModel } from './TaskModel';

export type TaskStateModel = {
    task: TaskModel[]; // task de outro arquivo
    secondsRemmaing: number;
    formatedSecondsRemmaing: string;
    activeTask: TaskModel | null;
    currentCycle: number; // 1 a 8
    config: {
        workTime: number;
        shortBreakTime: number;
        longBreakTime: number;
    };
};
