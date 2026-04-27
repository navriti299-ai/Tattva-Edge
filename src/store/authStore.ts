import { create } from 'zustand';
import { User } from '../types';

interface AuthState {
  user: User | null;
  isLoading: boolean;
  setUser: (user: User | null) => void;
  logout: () => void;
}

// Mock initial user for development
const mockUser: User = {
  id: 'user-1',
  name: 'Aryan Sharma',
  email: 'aryan@example.edu',
  phone: '9876543210',
  college: 'IIT Delhi',
  year: '3rd Year',
  department: 'Computer Science',
  role: 'student',
  premium: false,
  referralCode: 'ARYAN123',
  stats: {
    gigsCompleted: 12,
    rating: 4.8,
    points: 450,
  }
};

export const useAuthStore = create<AuthState>((set) => ({
  user: mockUser, // Default to mock user for easy preview
  isLoading: false,
  setUser: (user) => set({ user }),
  logout: () => set({ user: null }),
}));
