export type Tag = 'Todo' | 'Work' | 'Personal' | 'Meeting' | 'Shopping';

export interface NewNoteData {
  title: string;
  content: string;
  tag: Tag;
}

export interface Note {
  id: string;
  title: string;
  content: string;
  tag: Tag;
  createdAt: string;
  updatedAt: string;
}

export const initialDraft: NewNoteData = {
  title: '',
  content: '',
  tag: 'Todo',
};

// Для Zustand store
export type Draft = NewNoteData;
