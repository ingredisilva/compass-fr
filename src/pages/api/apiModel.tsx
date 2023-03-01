type User = {
  name: string;
  email: string;
  role: string;
};

type Resource = {
  name: string;
  description: string;
  type: string;
  quantity: number;
};

type Task = {
  name: string;
  description: string;
  start_date: Date;
  end_date: Date;
  status: string;
  progress: number;
  points: number;
  category: string;
  tags: string[];
  collaborators: User[];
  resources: Resource[];
};

type Project = {
  name: string;
  description: string;
  start_date: Date;
  end_date: Date;
  status: string;
  tasks: Task[];
  progress: number;
  points: number;
  category: string;
  tags: string[];
  collaborators: User[];
  resources: Resource[];
};

type Habit = {
  name: string;
  description: string;
  category: string;
  tags: string[];
  collaborators: User[];
  frequency: string;
  points: number;
};

type Finance = {
  name: string;
  description: string;
  amount: number;
  type: string;
  date: Date;
  category: string;
  tags: string[];
  collaborators: User[];
  project?: Project;
  habit?: Habit;
  points?: number;
  hours?: number;
};

const user: User = {
  name: 'John Doe',
  email: 'johndoe@example.com',
  role: 'leader',
};

const resource: Resource = {
  name: 'Resource Name',
  description: 'A brief description of the resource and its purpose.',
  type: 'equipment',
  quantity: 2,
};

const task: Task = {
  name: 'Task Name',
  description: 'A brief description of the task and its objectives.',
  start_date: new Date('2023-01-01'),
  end_date: new Date('2023-01-31'),
  status: 'in progress',
  progress: 50,
  points: 10,
  category: 'career',
  tags: ['tag1', 'tag2', 'tag3'],
  collaborators: [user],
  resources: [resource],
};

const project: Project = {
  name: 'Immigration',
  description: 'A brief description of the project and its objectives.',
  start_date: new Date('2023-01-01'),
  end_date: new Date('2023-12-31'),
  status: 'in progress',
  tasks: [task],
  progress: 50,
  points: 10,
  category: 'career',
  tags: ['tag1', 'tag2', 'tag3'],
  collaborators: [user],
  resources: [resource],
};

const habit: Habit = {
  name: 'Drink more water',
  description: 'Drink at least 8 glasses of water per day.',
  category: 'health',
  tags: ['tag1', 'tag2'],
  collaborators: [user],
  frequency: 'daily',
  points: 5,
};

const finance: Finance = {
  name: 'Finance Name',
  description: 'A brief description of the finance and its objectives.',
  amount: 100,
  type: 'income',
  date: new Date('2023-01-01'),
  category: 'career',
  tags: ['tag1', 'tag2', 'tag3'],
  collaborators: [user],
  project: project,
  habit: habit,
  points: 10,
  hours: 2,
};
export interface UserData {
  user: {
    name: string;
    email: string;
    password: string;
    age: number;
    gender: string;
    location: string;
    occupation: string;
    interests: string[];
    habits: {
      name: string;
      description: string;
      points: number;
      category: string;
      tags: string[];
      schedule: string;
      progress: number;
      hoursInvested: number;
    }[];
    projects: {
      name: string;
      description: string;
      start_date: Date;
      end_date: Date;
      status: string;
      steps: {
        name: string;
        description: string;
        start_date: Date;
        end_date: Date;
        status: string;
        progress: number;
        points: number;
        category: string;
        tags: string[];
        collaborators: {
          name: string;
          email: string;
          role: string;
        }[];
        resources: {
          name: string;
          description: string;
          type: string;
          quantity: number;
        }[];
      }[];
    }[];
    finances: {
      name: string;
      type: string;
      description: string;
      start_date: Date;
      end_date: Date;
      status: string;
      category: string;
      tags: string[];
      steps: {
        name: string;
        description: string;
        start_date: Date;
        end_date: Date;
        status: string;
        budget: number;
        expenses: {
          name: string;
          amount: number;
          category: string;
          date: Date;
        }[];
      }[];
    }[];
  };
}
