import type { User } from "../types/auth";


const MOCK_USERS: User[] = [
    {
        id: 'u1',
        gymId: 'gym-001',
        name: 'Juan Pérez (Dueño)',
        email: 'juan@gym.com',
        role: 'superadmin',
        permissions: ['users:create', 'users:read', 'users:delete', 'finances:read']
    },
    {
        id: 'u2',
        gymId: 'gym-001',
        name: 'Marta Recepción',
        email: 'marta@gym.com',
        role: 'admin',
        permissions: ['users:read']
    }
];

export const getGymUsers = (gymId: string): Promise<User[]> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const filtered = MOCK_USERS.filter(user => user.gymId === gymId);
            resolve(filtered);
        }, 2000);
    });
};

