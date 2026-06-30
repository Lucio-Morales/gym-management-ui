import { AuthResponse, LoginCredentials } from '../types/auth.types';

export const loginWithEmailAndPassword = async (credentials: LoginCredentials): Promise<AuthResponse> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (credentials.email.includes('@')) {
                resolve({
                    token: "mock-jwt-token-xyz-123",
                    user: {
                        id: "usr-001",
                        gymId: "gym-alpha",
                        gymName: "Iron Forge Gym",
                        name: "Carlos (Dueño)",
                        email: credentials.email,
                        role: "superadmin",
                        permissions: ["users:create", "users:read", "users:delete", "finances:read", "dashboard:view"]
                    }
                });
            } else {
                reject(new Error("Credenciales inválidas"));
            }
        }, 2000); // 2 seg
    });
};