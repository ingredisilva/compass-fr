export interface Project {
  name: string;
  description: string;
  start_date: Date;
  end_date: Date;
  status: string;
  steps: Step[];
}

export interface Step {
  name: string;
  description: string;
  start_date: Date;
  end_date: Date;
  status: string;
  progress: number;
  points: number;
  category: string;
  tags: string[];
  collaborators: Collaborator[];
  resources: Resource[];
}

export interface Collaborator {
  name: string;
  email: string;
  role: string;
}

export interface Resource {
  name: string;
  description: string;
  type: string;
  quantity: number;
}
