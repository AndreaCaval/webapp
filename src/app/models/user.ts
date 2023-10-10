export interface User {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    city: string;
    address?: string;
    location?: string;
    notes?: string;
    province?: string;
}
