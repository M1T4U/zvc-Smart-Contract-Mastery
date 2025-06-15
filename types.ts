
export interface Note {
  id: string;
  type: 'info' | 'warning' | 'tip' | 'code';
  content: string;
}

export interface SubTopic {
  id: string;
  title: string;
  content: string[]; // Array of paragraphs
  notes?: Note[];
  codeExamples?: { language: string; code: string; explanation?: string }[];
}

export interface Topic {
  id:string;
  title: string;
  introduction?: string[];
  subTopics: SubTopic[];
}

export interface Chapter {
  id: string;
  title: string;
  description: string;
  topics: Topic[];
}

export interface Book {
  title: string;
  chapters: Chapter[];
}
    