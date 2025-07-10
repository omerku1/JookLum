export interface TimelineItem {
  year: string;
  title: string;
  content: string;
}

export interface LineagePerson {
  name: string;
  id: string;
  details: string;
  children: LineagePerson[];
}

export interface Principle {
  title: string;
  content: string;
}

export interface FormItem {
  name: string;
  englishName?: string;
  translation: string;
  description?: string;
}

export interface Master {
  name: string;
  location: string;
  lineage: string;
  description: string;
}

export interface AppData {
  timeline: TimelineItem[];
  lineage: LineagePerson;
  principles: Principle[];
  forms: {
    foundations: FormItem[];
    shortHammers: FormItem[];
    longHammers: FormItem[];
  };
  masters: Master[];
}