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

export const userData: UserData = {
  user: {
    name: 'John Doe',
    email: 'johndoe@example.com',
    password: 'password123',
    age: 30,
    gender: 'male',
    location: 'New York',
    occupation: 'Software Engineer',
    interests: ['music', 'sports', 'reading'],
    habits: [
      {
        name: 'Drink more water',
        description: 'Drink at least 8 glasses of water every day',
        points: 5,
        category: 'fitness',
        tags: ['health', 'hydration'],
        schedule: 'daily',
        progress: 50,
        hoursInvested: 10,
      },
      {
        name: 'Meditation',
        description: 'Practice meditation for 15 minutes every day',
        points: 10,
        category: 'mindfulness',
        tags: ['stress relief', 'relaxation'],
        schedule: 'daily',
        progress: 80,
        hoursInvested: 20,
      },
    ],
    projects: [
      {
        name: 'Immigration',
        description: 'A brief description of the project and its objectives.',
        start_date: new Date('2023-01-01'),
        end_date: new Date('2023-12-31'),
        status: 'in progress',
        steps: [
          {
            name: 'Market Research',
            description: 'Conduct market research to identify customer needs',
            start_date: new Date('2023-03-01'),
            end_date: new Date('2023-03-31'),
            status: 'completed',
            progress: 100,
            points: 10,
            category: 'career',
            tags: ['research', 'product development'],
            collaborators: [
              {
                name: 'Alice Smith',
                email: 'alice.smith@example.com',
                role: 'leader',
              },
              {
                name: 'Bob Johnson',
                email: 'bob.johnson@example.com',
                role: 'participant',
              },
            ],
            resources: [
              {
                name: 'Market Research Report',
                description: 'A report on the results of the market research',
                type: 'document',
                quantity: 1,
              },
            ],
          },
          {
            name: 'Product Design',
            description: 'Design the product based on customer needs',
            start_date: new Date('2023-04-01'),
            end_date: new Date('2023-05-31'),
            status: 'in progress',
            progress: 50,
            points: 20,
            category: 'career',
            tags: ['product development', 'design'],
            collaborators: [
              {
                name: 'Alice Smith',
                email: 'alice.smith@example.com',
                role: 'leader',
              },
              {
                name: 'Charlie Lee',
                email: 'charlie.lee@example.com',
                role: 'participant',
              },
            ],
            resources: [
              {
                name: 'Design Mockups',
                description: 'Mockups of the product design',
                type: 'image',
                quantity: 5,
              },
            ],
          },
        ],
      },
    ],
    finances: [
      {
        name: 'Monthly Budget',
        type: 'budget',
        description: 'A budget for monthly expenses',
        start_date: new Date('2023-01-01'),
        end_date: new Date('2023-12-31'),
        status: 'in progress',
        category: 'finance',
        tags: ['budgeting', 'expenses'],
        steps: [
          {
            name: 'Step 1',
            description: 'A brief description of the step and its objectives.',
            start_date: new Date('2023-01-01'),
            end_date: new Date('2023-01-31'),
            status: 'in progress',
            budget: 1000,
            expenses: [
              {
                name: 'Rent',
                amount: 500,
                category: 'housing',
                date: new Date('2023-01-01'),
              },
              {
                name: 'Groceries',
                amount: 200,
                category: 'food',
                date: new Date('2023-01-15'),
              },
              {
                name: 'Utilities',
                amount: 100,
                category: 'utilities',
                date: new Date('2023-01-20'),
              },
            ],
          },
        ],
      },
    ],
  },
};
