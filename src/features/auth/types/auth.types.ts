export interface LoginCredentials {
    email: string;
    password?: string;
}

export interface AuthUser {
    id: string;
    gymId: string;
    gymName: string;
    name: string;
    email: string;
    role: 'superadmin' | 'admin' | 'trainer' | 'client';
    permissions: string[];
}

export interface AuthResponse {
    user: AuthUser;
    token: string;
}