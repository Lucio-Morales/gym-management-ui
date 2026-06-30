export interface Gym {
    id: string;
    name: string;
    plan: 'free' | 'basic' | 'premium';
}

export interface User {
    id: string;
    gymId: string;
    name: string;
    email: string;
    role: 'superadmin' | 'admin' | 'trainer' | 'client';
    permissions: string[];
}

