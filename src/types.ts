export interface Todo {
  id: string;
  text: string;
  isCompleted: boolean;
  date: string;
  time: string;
}

export type Theme = 'light' | 'dark'