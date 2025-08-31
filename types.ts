
export interface Skill {
  name: string;
  level: number;
}

export interface Certification {
  date: string;
  title: string;
  id: string;
  imageUrl: string;
}

export interface Education {
    date: string;
    title: string;
    id: string;
    imageUrl: string;
}

export interface School {
    date: string;
    title: string;
    id: string;
    imageUrl: string;
}

export interface Experience {
  role: string;
  company: string;
  duration: string;
  functions: string[];
  achievements: string[];
}
