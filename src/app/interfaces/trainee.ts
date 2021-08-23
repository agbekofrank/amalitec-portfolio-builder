export interface Trainee {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  gender: string;
  certifications: [];
  education: {
    id: number;
    major: string;
    completion: string;
    institution: {
      id: number;
      name: string;
      type: string;
    };
  };
  skills: [
    {
      id: number;
      name: string;
      proficiency: number;
      category: number;
    },
    {
      id: number;
      name: string;
      proficiency: number;
      category: number;
    }
  ];
  timestamp: string;
  updated: string;
}
