export type UserRole = 'student' | 'admin';

export interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
  college: string;
  year: string;
  department: string;
  role: UserRole;
  avatar?: string;
  premium: boolean;
  referralCode: string;
  referredBy?: string;
  stats: {
    gigsCompleted: number;
    rating: number;
    points: number;
  };
}

export interface Gig {
  id: string;
  title: string;
  description: string;
  budget: number;
  category: string;
  postedBy: string; // userId
  status: 'open' | 'in-progress' | 'completed' | 'cancelled';
  createdAt: string;
}

export interface Note {
  id: string;
  title: string;
  subject: string;
  semester: number;
  department: string;
  fileUrl: string;
  uploadedBy: string;
  downloads: number;
  createdAt: string;
}

export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  condition: 'new' | 'like-new' | 'used';
  category: string;
  images: string[];
  sellerId: string;
  sold: boolean;
  createdAt: string;
}

export interface CampusEvent {
  id: string;
  title: string;
  description: string;
  date: string;
  location: string;
  category: 'fest' | 'workshop' | 'sports' | 'hackathon';
  organizer: string;
  registrations: number;
  imageUrl?: string;
}
