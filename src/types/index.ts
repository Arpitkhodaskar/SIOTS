export interface User {
  id: string;
  email: string;
  name: string;
  role: 'student' | 'admin';
}

export interface Internship {
  id: string;
  title: string;
  company: string;
  description: string;
  requirements: string[];
  location: string;
  deadline: string;
  postedBy: string;
  createdAt: string;
}

export interface Application {
  id: string;
  internshipId: string;
  studentId: string;
  status: 'pending' | 'approved' | 'rejected';
  submittedAt: string;
}

export interface Schedule {
  id: string;
  studentId: string;
  internshipId: string;
  startDate: string;
  endDate: string;
  weeklyHours: number;
  supervisorName: string;
  supervisorEmail: string;
  status: 'pending' | 'approved' | 'rejected';
}